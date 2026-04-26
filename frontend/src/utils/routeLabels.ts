interface Bus {
  busId:            string
  transfers:        number
  cost:             number
  travelTime:       number
  totalJourneyTime?: number
  walkingDistance:  number
  arrivalTime:      number
  score?:           number
  [key: string]:    unknown
}

export const getRouteLabel = (bus: Bus, allBuses: Bus[]): { text: string; color: string } => {
  const index = allBuses.indexOf(bus)
  const best  = allBuses[0]
  if (!best) return { text: '', color: '' }

  if (index === 0) return { text: 'Best overall', color: 'gold' }

  // No transfers — strong differentiator
  if (bus.transfers === 0 && (best.transfers ?? 0) > 0)
    return { text: 'No transfers', color: 'teal' }

  // Cheaper than rank 1
  const costDiff = (best.cost ?? 0) - bus.cost
  if (costDiff >= 1)
    return { text: `Saves ${costDiff.toFixed(0)} AED`, color: 'teal' }

  // Faster total journey than rank 1 — uses totalJourneyTime now
  const busTotal  = bus.totalJourneyTime  ?? bus.travelTime
  const bestTotal = best.totalJourneyTime ?? best.travelTime
  const timeDiff  = Math.round(bestTotal - busTotal)
  if (timeDiff >= 3)
    return { text: `${timeDiff} min faster`, color: 'teal' }

  // Less walking than rank 1
  const walkDiff = (best.walkingDistance ?? 0) - bus.walkingDistance
  if (walkDiff >= 0.1)
    return { text: 'Less walking', color: 'teal' }

  // Arrives sooner
  const waitDiff = Math.round((best.arrivalTime ?? 0) - bus.arrivalTime)
  if (waitDiff >= 2)
    return { text: `Arrives ${waitDiff} min sooner`, color: 'teal' }

  // Fallback
  return { text: `#${index + 1} ranked`, color: 'muted' }
}