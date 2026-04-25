import { useState, useCallback } from 'react'
import {type Location,type PinnedStop,type SavedRoute} from '../lib/types'

 

const useLocationPicker = () => {
  const [origin,      setOrigin]      = useState<Location | null>(null)
  const [destination, setDestination] = useState<Location | null>(null)

  const [originInput,      setOriginInput]      = useState('')
  const [destinationInput, setDestinationInput] = useState('')

  const [pinnedOrigin, setPinnedOrigin] = useState<PinnedStop | null>(null)
  const [pinnedDest,   setPinnedDest]   = useState<PinnedStop | null>(null)

  const [programmaticFill, setProgrammaticFill] = useState(false)
  const [inputError,       setInputError]       = useState<string | null>(null)

  
  const handleOriginChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
    locationData?: { lat: number; lng: number }
  ) => {
    setProgrammaticFill(false)
    setOriginInput(e.target.value)
    setInputError(null)
    setPinnedOrigin(null)  
    if (locationData?.lat && locationData?.lng) {
      setOrigin({ lat: locationData.lat, lng: locationData.lng, name: e.target.value })
    } else {
      setOrigin(null)
    }
  }, [])

  const handleDestinationChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
    locationData?: { lat: number; lng: number }
  ) => {
    setProgrammaticFill(false)
    setDestinationInput(e.target.value)
    setInputError(null)
    setPinnedDest(null)
    if (locationData?.lat && locationData?.lng) {
      setDestination({ lat: locationData.lat, lng: locationData.lng, name: e.target.value })
    } else {
      setDestination(null)
    }
  }, [])
 
  const fillFromSavedRoute = useCallback((route: SavedRoute) => {
    setProgrammaticFill(true)
    setPinnedOrigin(null)
    setPinnedDest(null)
    setOriginInput(route.originName)
    setOrigin({ name: route.originName, lat: route.originLat, lng: route.originLng })
    setDestinationInput(route.destName)
    setDestination({ name: route.destName, lat: route.destLat, lng: route.destLng })
  }, [])

 
  const pinStopAsOrigin = useCallback((stop: PinnedStop) => {
    setPinnedOrigin(stop)
    setOriginInput('')
    setOrigin({ lat: stop.lat, lng: stop.lng, name: stop.name })
    setInputError(null)
  }, [])

  const pinStopAsDestination = useCallback((stop: PinnedStop) => {
    setPinnedDest(stop)
    setDestinationInput('')
    setDestination({ lat: stop.lat, lng: stop.lng, name: stop.name })
    setInputError(null)
  }, [])

 
  const clearPinnedOrigin = useCallback(() => {
    setPinnedOrigin(null)
    setOriginInput('')
    setOrigin(null)
  }, [])

  const clearPinnedDest = useCallback(() => {
    setPinnedDest(null)
    setDestinationInput('')
    setDestination(null)
  }, [])

 
  const resetLocations = useCallback(() => {
    setOrigin(null)
    setDestination(null)
    setOriginInput('')
    setDestinationInput('')
    setPinnedOrigin(null)
    setPinnedDest(null)
    setProgrammaticFill(false)
    setInputError(null)
  }, [])

  return {
    origin,
    destination,
    originInput,
    destinationInput,
    pinnedOrigin,
    pinnedDest,
    programmaticFill,
    inputError,
    setInputError,
    handleOriginChange,
    handleDestinationChange,
    fillFromSavedRoute,
    pinStopAsOrigin,
    pinStopAsDestination,
    clearPinnedOrigin,
    clearPinnedDest,
    resetLocations,
  }
}

export default useLocationPicker