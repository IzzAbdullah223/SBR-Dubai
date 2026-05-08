import { useState } from 'react'
import { settingsAPI } from '../services/api'
import type { User } from '../lib/types'

const useSettings = (
  _user: User | null,
  onUserUpdate: ((user: User) => void) | undefined,
  onLogout:     (() => void) | undefined
) => {
  const [saving,  setSaving]  = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error,   setError]   = useState<string | null>(null)

  const clear = () => { setSuccess(null); setError(null) }

  const withFeedback = async <T>(fn: () => Promise<T>, successMsg: string): Promise<T | null> => {
    clear()
    setSaving(true)
    try {
      const result = await fn()
      setSuccess(successMsg)
      return result
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
      return null
    } finally {
      setSaving(false)
    }
  }

  const updateProfile = async (data: { name: string; email: string; phone: string }) => {
    const result = await withFeedback(
      () => settingsAPI.updateProfile(data),
      'Profile updated successfully'
    ) as any
    if (result?.success) {
      localStorage.setItem('user', JSON.stringify(result.user))
      onUserUpdate?.(result.user)
    }
  }

  const changePassword = async (data: { currentPassword: string; newPassword: string }) => {
    await withFeedback(
      () => settingsAPI.changePassword(data),
      'Password changed successfully'
    )
  }

  const updatePreferences = async (optimizationMode: string) => {
    const result = await withFeedback(
      () => settingsAPI.updatePreferences(optimizationMode),
      'Preferences saved'
    ) as any
    if (result?.success) {
      localStorage.setItem('user', JSON.stringify(result.user))
      onUserUpdate?.(result.user)
    }
  }

  const clearSavedRoutes = async () => {
    await withFeedback(
      () => settingsAPI.clearSavedRoutes(),
      'All saved routes cleared'
    )
  }

  const deleteAccount = async (password: string) => {
    const result = await withFeedback(
      () => settingsAPI.deleteAccount(password),
      'Account deleted'
    ) as any
    if (result?.success) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      onLogout?.()
    }
  }

  return {
    saving,
    success,
    error,
    clearFeedback: clear,
    updateProfile,
    changePassword,
    updatePreferences,
    clearSavedRoutes,
    deleteAccount,
  }
}

export default useSettings