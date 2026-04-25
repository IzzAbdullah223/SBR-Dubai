import { useState, useEffect } from 'react'
import { settingsAPI } from '../services/api'
import type { User } from '../lib/types'

const useOptimizationMode = (user: User | null) => {
  const [optimizationMode, setOptimizationMode] = useState<string>(
    () => user?.preferences?.optimization || 'fastest'
  )

 
  useEffect(() => {
    setOptimizationMode(user?.preferences?.optimization || 'fastest')
  }, [user?.preferences?.optimization])

  const handleModeChange = async (mode: string) => {
    setOptimizationMode(mode)
    if (user) {
      try { await settingsAPI.updatePreferences(mode) } catch {}
    }
  }

  return { optimizationMode, handleModeChange }
}

export default useOptimizationMode