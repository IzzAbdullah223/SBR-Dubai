const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const getToken = () => localStorage.getItem('token')

const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
})

//  response helpers 

const handleResponse = async (res: Response) => {
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Something went wrong')
  return data
}

//  auth 
export const authAPI = {
  login: async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ email, password }),
    })
    return handleResponse(res)
  },

  signup: async (name: string, email: string, password: string, phone?: string) => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ name, email, password, phone }),
    })
    return handleResponse(res)
  },

  getProfile: async () => {
    const res = await fetch(`${BASE_URL}/api/settings/profile`, {
      headers: authHeaders(),
    })
    return handleResponse(res)
  },
}