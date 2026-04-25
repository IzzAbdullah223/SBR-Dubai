import { type  Request, type  Response, type  NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_in_prod'

export interface AuthRequest extends Request {
  userId?: number
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' })
  }

const token = authHeader.split(' ')[1]!

  try {
const decoded = jwt.verify(token, JWT_SECRET) as unknown as { userId: number }
    req.userId = decoded.userId
    next()
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' })
  }
}