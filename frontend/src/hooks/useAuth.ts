import { useState, useEffect } from 'react'
import { authAPI } from '../services/api'
import { type User } from '../lib/types'

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  )

  // persist theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  // apply dark class to <html>
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  // on mount — check if token exists and is valid
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return
    try {
      const payload = JSON.parse(atob(token.split('.')[1]!))
      if (payload.exp * 1000 > Date.now()) {
        const storedUser = localStorage.getItem('user')
        const immediateUser = storedUser ? JSON.parse(storedUser) : payload.user
        setUser(immediateUser)
        authAPI.getProfile()
          .then(data => {
            if (data?.success && data?.user) {
              setUser(data.user)
              localStorage.setItem('user', JSON.stringify(data.user))
            }
          })
          .catch(() => {})
      } else {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
    } catch {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }, [])

  const handleLoginSuccess = (loggedInUser: User) => {
    localStorage.setItem('user', JSON.stringify(loggedInUser))
    setUser(loggedInUser)
    setShowLogin(false)
    setShowSignUp(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('theme')
    setUser(null)
    setTheme('light')
  }

  const handleSwitchToSignUp = () => { setShowLogin(false); setShowSignUp(true) }
  const handleSwitchToLogin  = () => { setShowSignUp(false); setShowLogin(true) }

  return {
    user,
    theme,
    toggleTheme,
    showLogin,
    showSignUp,
    handleLoginSuccess,
    handleLogout,
    handleSwitchToSignUp,
    handleSwitchToLogin,
    openLogin:   () => setShowLogin(true),
    openSignUp:  () => setShowSignUp(true),
    closeLogin:  () => setShowLogin(false),
    closeSignUp: () => setShowSignUp(false),
  }
}

export default useAuth