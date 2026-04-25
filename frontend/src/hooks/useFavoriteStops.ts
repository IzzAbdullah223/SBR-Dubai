import { useState, useCallback, useEffect } from 'react'
import { settingsAPI } from '../services/api'
import type { User,FavoriteStop } from '../lib/types'

 

const useFavoriteStops = (user: User | null) => {
  const [favoriteStops,    setFavoriteStops]    = useState<FavoriteStop[]>([])
  const [loadingFavorites, setLoadingFavorites] = useState(false)

  const fetchFavorites = useCallback(async () => {
    if (!user) return
    setLoadingFavorites(true)
    try {
      const result = await settingsAPI.getFavoriteStops()
      if (result?.success) setFavoriteStops(result.data)
    } catch {
 
    } finally {
      setLoadingFavorites(false)
    }
  }, [user])

  
  useEffect(() => {
    if (user?.id) {
      fetchFavorites()
    } else {
      setFavoriteStops([])
    }
  }, [user?.id])

  const addFavorite = useCallback(async (stop: {
    stopId: string
    name:   string
    lat:    number
    lng:    number
  }) => {
    try {
      const result = await settingsAPI.addFavoriteStop({
        stopId: stop.stopId,
        name:   stop.name,
        lat:    stop.lat,    
        lng:    stop.lng,    
      })
      if (result?.success) setFavoriteStops(result.data)
    } catch {
    
    }
  }, [])

  const removeFavorite = useCallback(async (stopId: string) => {
    try {
      const result = await settingsAPI.removeFavoriteStop(stopId)
      if (result?.success) setFavoriteStops(result.data)
    } catch {
     
    }
  }, [])

  const isFavorite = useCallback((stopId: string) => {
    return favoriteStops.some(s => s.stopId === stopId)
  }, [favoriteStops])

  return {
    favoriteStops,
    loadingFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }
}

export default useFavoriteStops