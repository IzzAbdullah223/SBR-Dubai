import { useState, useEffect, useCallback } from 'react'
import { settingsAPI, topsisAPI } from '../services/api'
import type { User, Bus } from '../lib/types'

const useOptimizationMode = (
  user:     User | null,
  buses:    Bus[],
  setBuses: (buses: Bus[]) => void
) => {
  const [optimizationMode, setOptimizationMode] = useState<string>(
    () => user?.preferences?.optimization || 'fastest'
  )
  const [ranking, setRanking] = useState(false)

  useEffect(() => {
    setOptimizationMode(user?.preferences?.optimization || 'fastest')
  }, [user?.preferences?.optimization])

  const handleModeChange = useCallback(async (mode: string) => {
    setOptimizationMode(mode)

    // Re-rank existing results without a new search
    if (buses.length > 0) {
      try {
        setRanking(true)
        const response = await topsisAPI.rank(buses, mode)
        if (response.success) setBuses(response.buses)
      } catch {
        // silent fail — keep existing order
      } finally {
        setRanking(false)
      }
    }

    // Save preference to backend silently
    if (user) {
      try { await settingsAPI.updatePreferences(mode) } catch {}
    }
  }, [buses, setBuses, user])

  return { optimizationMode, handleModeChange, ranking }
}

export default useOptimizationMode