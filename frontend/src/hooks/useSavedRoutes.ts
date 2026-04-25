import { useState, useCallback, useEffect } from 'react'
import { savedRoutesAPI } from '../services/api'
import type { User,SavedRoute } from '../lib/types'


 

const truncate = (str: string, max: number): string =>
  str.length > max ? str.slice(0, max - 1) + '…' : str

const useSavedRoutes = (user: User | null) => {
  const [savedRoutes,  setSavedRoutes]  = useState<SavedRoute[]>([])
  const [loadingSaved, setLoadingSaved] = useState(false)
  const [savingKey,    setSavingKey]    = useState<string | null>(null)
  const [saveError,    setSaveError]    = useState<string | null>(null)
  const [showSaved,    setShowSaved]    = useState(false)

  const fetchSavedRoutes = useCallback(async () => {
    if (!user) return
    setLoadingSaved(true)
    try {
      const data = await savedRoutesAPI.getAll()
      if (data.success) setSavedRoutes(data.data)
    } catch {
    
    } finally {
      setLoadingSaved(false)
    }
  }, [user])

  useEffect(() => {
    if (user?.id) {
      fetchSavedRoutes()
    } else {
      setSavedRoutes([])
    }
  }, [user?.id])

  const saveRoute = useCallback(async (
    origin:      { name: string; lat: number; lng: number },
    destination: { name: string; lat: number; lng: number }
  ) => {
    if (!user) {
      setSaveError('Please log in to save routes.')
      return false
    }

    const journeyKey = `${origin.name}__${destination.name}`
    setSavingKey(journeyKey)
    setSaveError(null)

    try {
      const originLabel = truncate(origin.name, 48)
      const destLabel   = truncate(destination.name, 48)

      const data = await savedRoutesAPI.create({
        routeName:  `${originLabel} → ${destLabel}`,
        originName: origin.name,
        originLat:  origin.lat,
        originLng:  origin.lng,
        destName:   destination.name,
        destLat:    destination.lat,
        destLng:    destination.lng,
      })

      if (data.success) {
        setSavedRoutes(prev => [data.data, ...prev])
        return true
      } else {
        setSaveError(data.message || 'Could not save this route.')
        return false
      }
    } catch {
      setSaveError('Could not save this route. Please try again.')
      return false
    } finally {
      setSavingKey(null)
    }
  }, [user])

  const deleteSavedRoute = useCallback(async (routeId: number) => {
    if (!user) return
    try {
      const data = await savedRoutesAPI.delete(routeId)
      if (data.success) {
 
        setSavedRoutes(prev => prev.filter(r => r.id !== routeId))
      }
    } catch {
    
    }
  }, [user])

  const toggleSavedPanel = useCallback(() => {
    setShowSaved(prev => {
      const next = !prev
      if (next) fetchSavedRoutes()
      return next
    })
  }, [fetchSavedRoutes])

   
  const isJourneySaved = useCallback((
    originLat: number, originLng: number,
    destLat:   number, destLng:   number
  ) => {
    return savedRoutes.some(r =>
      r.originLat === originLat &&
      r.originLng === originLng &&
      r.destLat   === destLat   &&
      r.destLng   === destLng
    )
  }, [savedRoutes])

  return {
    savedRoutes,
    loadingSaved,
    savingKey,
    saveError,
    showSaved,
    saveRoute,
    deleteSavedRoute,
    toggleSavedPanel,
    setSaveError,
    isJourneySaved,
  }
}

export default useSavedRoutes