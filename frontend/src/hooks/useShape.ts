import { useState, useEffect } from 'react'
import { shapeAPI } from '../services/api'
import { type Coordinate, type ShapeResult } from '../lib/types'

 
const fetchTrimmedShape = async (
  lineId:      string,
  originStopId?: string,
  destStopId?:   string
): Promise<ShapeResult | null> => {
  if (!lineId) return null
  try {
    const res = await shapeAPI.getById(lineId, originStopId, destStopId)
    if (!res.success) return null
    return { coordinates: res.coordinates, trimRatio: res.trimRatio ?? 1.0 }
  } catch {
    return null
  }
}

const fetchBestShape = async (
  lineId:       string | null,
  lineIdReturn: string | null,
  originStopId?: string,
  destStopId?:   string
): Promise<Coordinate[] | null> => {

  
  if (lineId) {
    const outbound = await fetchTrimmedShape(lineId, originStopId, destStopId)
    if (outbound) return outbound.coordinates
  }
 
  if (lineIdReturn) {
    const returnShape = await fetchTrimmedShape(lineIdReturn, originStopId, destStopId)
    if (returnShape) return returnShape.coordinates
  }

 
  return null
}

const useShape = (selectedBus: any) => {
  const [shapeCoordinates,     setShapeCoordinates]     = useState<Coordinate[] | null>(null)
  const [shapeCoordinatesLeg2, setShapeCoordinatesLeg2] = useState<Coordinate[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    setShapeCoordinates(null)
    setShapeCoordinatesLeg2(null)
    setError(null)

    if (!selectedBus) return
    console.log('selectedBus lineId:', selectedBus.lineId, selectedBus.lineIdReturn, selectedBus.journeyType)

    const fetchShape = async () => {
      setLoading(true)
      try {

          //direct route 
        if (selectedBus.journeyType === 'direct' && selectedBus.lineId) {
          const coords = await fetchBestShape(
            selectedBus.lineId,
            selectedBus.lineIdReturn,
            selectedBus.originStop?.stopId,
            selectedBus.destinationStop?.stopId
          )
          if (coords) setShapeCoordinates(coords)
        }

           //transfer route
        if (selectedBus.journeyType === 'transfer') {

          
          if (selectedBus.lineId) {
            const coords1 = await fetchBestShape(
              selectedBus.lineId,
              selectedBus.lineIdReturn,
              selectedBus.originStop?.stopId,
              selectedBus.transferStop?.stopId
            )
            if (coords1) setShapeCoordinates(coords1)
          }

          
          if (selectedBus.lineIdLeg2) {
            const coords2 = await fetchBestShape(
              selectedBus.lineIdLeg2,
              selectedBus.lineIdLeg2Return,
              selectedBus.transferStop?.stopId,
              selectedBus.destinationStop?.stopId
            )
            if (coords2) setShapeCoordinatesLeg2(coords2)
          }
        }

      } catch (err) {
        console.error('Error fetching shape:', err)
        setError('Could not load route shape')
      } finally {
        setLoading(false)
      }
    }

    fetchShape()
  }, [selectedBus?.busId])

  return { shapeCoordinates, shapeCoordinatesLeg2, loading, error }
}

export default useShape