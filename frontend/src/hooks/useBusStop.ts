import { useState, useCallback } from 'react'
import {type BusStop} from '../lib/types'

 
const useBusStop = () => {
  const [selectedStop, setSelectedStop] = useState<BusStop | null>(null)
  const [loadingStop,  setLoadingStop]  = useState(false)

  const selectStop = useCallback(async (basicStop: BusStop) => {
    if (!basicStop?.stopId) return

  
    setSelectedStop(basicStop)
    setLoadingStop(true)

    try {
      const { busStopsAPI } = await import('../services/api')
      const result = await busStopsAPI.getById(basicStop.stopId)
      if (result?.success && result?.data) {
      
        setSelectedStop(result.data)
      }
    } catch {
     
    } finally {
      setLoadingStop(false)
    }
  }, [])

  const clearStop = useCallback(() => {
    setSelectedStop(null)
    setLoadingStop(false)
  }, [])

  return { selectedStop, loadingStop, selectStop, clearStop }
}

export default useBusStop