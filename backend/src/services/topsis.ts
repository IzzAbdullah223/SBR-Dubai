import type { Bus } from '../lib/types.js'

 
interface Weights {
  totalJourneyTime: number
  cost:             number
  walkingDistance:  number
  transfers:        number
}

type Criterion = 'totalJourneyTime' | 'cost' | 'walkingDistance' | 'transfers'

export const rankBuses = (buses: Bus[], weights: Weights): Bus[] => {
  if (!buses || buses.length === 0) return []
  if (buses.length === 1) return [{ ...buses[0], score: 1.0 } as Bus]

  const criteria: Criterion[] = ['totalJourneyTime', 'cost', 'walkingDistance', 'transfers']

 
  const normalizedMatrix: number[][] = criteria.map(criterion => {
    const values = buses.map(bus => bus[criterion] as number)
    const denominator = Math.sqrt(values.reduce((sum, val) => sum + val * val, 0))
    if (denominator === 0) return values.map(() => 0)
    return values.map(val => val / denominator)
  }) as number[][]

  const weightedMatrix: number[][] = criteria.map((criterion, idx) =>
    normalizedMatrix[idx]!.map(val => val * weights[criterion])
  ) as number[][]

  const idealSolution:         number[] = criteria.map((_, idx) => Math.min(...weightedMatrix[idx]!))
  const negativeIdealSolution: number[] = criteria.map((_, idx) => Math.max(...weightedMatrix[idx]!))

  const distances = buses.map((_, busIdx) => {
    let dPlus = 0, dMinus = 0
    criteria.forEach((_, cIdx) => {
      const v = weightedMatrix[cIdx]![busIdx]!
      dPlus  += Math.pow(v - idealSolution[cIdx]!, 2)
      dMinus += Math.pow(v - negativeIdealSolution[cIdx]!, 2)
    })
    return {
      distanceToIdeal:    Math.sqrt(dPlus),
      distanceToNegative: Math.sqrt(dMinus),
    }
  })

  return buses
    .map((bus, idx) => {
      const { distanceToIdeal, distanceToNegative } = distances[idx]!
      const denom = distanceToIdeal + distanceToNegative
      return {
        ...bus,
        score: Math.round((denom === 0 ? 0 : distanceToNegative / denom) * 100) / 100
      } as Bus
    })
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
}