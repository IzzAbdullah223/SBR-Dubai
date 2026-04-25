import { type  Request, type Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByEmail, getPublicProfile } from '../db/queries.js'
import { prisma } from '../db/lib/prisma.js'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_in_prod'
const JWT_EXPIRES_IN = '7d'

 
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email and password are required' })
    }

    const existing = await getUserByEmail(email)
    if (existing) {
      return res.status(409).json({ success: false, message: 'Email already in use' })
    }

    const hashed = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        phone:    phone || null,
      },
    })

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

    const publicUser = getPublicProfile(user)

    return res.status(201).json({ success: true, token, user: publicUser })
  } catch (err) {
    console.error('signup error:', err)
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

 
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' })
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' })
    }

    if (!user.password) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' })
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' })
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

    const publicUser = getPublicProfile(user)

    return res.status(200).json({ success: true, token, user: publicUser })
  } catch (err) {
    console.error('login error:', err)
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}
