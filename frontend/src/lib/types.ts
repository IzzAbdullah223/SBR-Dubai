import { z } from 'zod'

export const loginSchema = z.object({
  email:    z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signUpSchema = z.object({
  name:            z.string().min(1, 'Name is required'),
  email:           z.string().email('Invalid email'),
  phone:           z.string().regex(/^(\+971|00971|0)?[0-9]{9}$/, 'Invalid UAE phone number').optional().or(z.literal('')),
  password:        z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path:    ['confirmPassword'],
})

export type LoginFormData  = z.infer<typeof loginSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>




export interface User {
  id: number
  name: string
  email: string
  phone?: string
  preferences: {
    language: string
    theme: string
    walkingSpeed: number
    optimization: string
  }
  favoriteStops: any[]
}