import { useState, useCallback } from 'react'
import { topsisAPI } from '../services/api'
import { type Bus } from '../lib/types'

export const ERROR_TYPES: Record<string, 'info' | 'error'> = {
  INVALID_ORIGIN:      'error',
  INVALID_DESTINATION: 'error',
  SAME_LOCATION:       'error',
  NO_STOPS_BOTH:       'info',
  NO_ORIGIN_STOPS:     'info',
  NO_DEST_STOPS:       'info',
  NO_STOPS:            'info',
  NO_ROUTES:           'info',
  OUT_OF_SERVICE:      'info',
  SERVER_ERROR:        'error',
  NETWORK_ERROR:       'error',
}

const ERROR_MESSAGES: Record<string, string> = {
  INVALID_ORIGIN:      'Please select a valid origin location.',
  INVALID_DESTINATION: 'Please select a valid destination.',
  SAME_LOCATION:       'Origin and destination cannot be the same.',
  NO_STOPS_BOTH:       'No bus stops found near your origin or destination.',
  NO_ORIGIN_STOPS:     'No bus stops found near your origin.',
  NO_DEST_STOPS:       'No bus stops found near your destination.',
  NO_STOPS:            'No bus stops found near your locations.',
  NO_ROUTES:           'No bus routes found between these locations.',
  OUT_OF_SERVICE:      'No buses are currently in service for this route.',
  SERVER_ERROR:        'Something went wrong. Please try again.',
  NETWORK_ERROR:       'Network error. Please check your connection.',
}

const getErrorMessage = (code: string, fallback?: string): string => {
  return ERROR_MESSAGES[code] || fallback || ERROR_MESSAGES['SERVER_ERROR']!
}

 

const useFindBuses = () => {
  const [buses,     setBuses]     = useState<Bus[]>([])
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)
  const [errorType, setErrorType] = useState<'info' | 'error' | null>(null)
  const [stats,     setStats]     = useState<any>(null)

  const findBuses = useCallback(async (
    origin:           { lat: number; lng: number },
    destination:      { lat: number; lng: number },
    optimizationMode = 'fastest'
  ) => {
    if (!origin?.lat || !origin?.lng) {
      setError(getErrorMessage('INVALID_ORIGIN'))
      setErrorType('error')
      return
    }
    if (!destination?.lat || !destination?.lng) {
      setError(getErrorMessage('INVALID_DESTINATION'))
      setErrorType('error')
      return
    }
    if (origin.lat === destination.lat && origin.lng === destination.lng) {
      setError(getErrorMessage('SAME_LOCATION'))
      setErrorType('error')
      return
    }

    try {
      setLoading(true)
      setError(null)
      setErrorType(null)
      setBuses([])
      setStats(null)

      const response = await topsisAPI.findBuses(origin, destination, optimizationMode)

      if (response.success) {
        setBuses(response.buses)
        setStats(response.stats)
      } else {
        const code = response.errorCode || 'SERVER_ERROR'
        setError(getErrorMessage(code, response.message))
        setErrorType(ERROR_TYPES[code] || 'error')
      }
    } catch (err) {
      console.error('Network error finding buses:', err)
      setError(getErrorMessage('NETWORK_ERROR'))
      setErrorType('error')
    } finally {
      setLoading(false)
    }
  }, [])

  const clearResults = useCallback(() => {
    setBuses([])
    setError(null)
    setErrorType(null)
    setStats(null)
  }, [])

  return { buses,setBuses, loading, error, errorType, stats, findBuses, clearResults }
}

export default useFindBuses