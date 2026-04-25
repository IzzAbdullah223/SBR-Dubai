import { useEffect, useRef } from 'react'
import {
  Clock, DollarSign, MapPin, GitMerge, Star,
  Navigation, ArrowRight, Bookmark, BookmarkCheck, CreditCard
} from 'lucide-react'
import { getRouteLabel } from '..//utils/routeLabels'
import type { Bus, User} from '../lib/types'

interface BusResultsProps {
  buses:               Bus[]
  onSelectBus:         (bus: Bus) => void
  selectedBus:         Bus | null
  loading:             boolean
  onSaveJourney:       () => void
  isSavingJourney:     boolean
  journeyAlreadySaved: boolean
  user:                User | null
  walletBalance?:      number | null
}

const BusResults = ({
  buses, onSelectBus, selectedBus, loading,
  onSaveJourney, isSavingJourney, journeyAlreadySaved,
  user, walletBalance = null
}: BusResultsProps) => {
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    if (!selectedBus?.busId) return
    const el = cardRefs.current[selectedBus.busId]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [selectedBus?.busId])

  if (loading) {
    return (
      <div className="flex flex-col items-center py-12 gap-4">
        <div className="w-11 h-11 border-[3px] border-gray-200 border-t-gray-900 rounded-full animate-spin" />
        <p className="text-sm font-semibold text-gray-900 dark:text-white">Finding routes...</p>
      </div>
    )
  }

  if (!buses || buses.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-sm text-gray-400">No routes found.</p>
      </div>
    )
  }

  const getLabelStyle = (color: string) => {
    if (color === 'gold') return 'bg-yellow-400/15 text-yellow-600'
    if (color === 'teal') return 'bg-teal-500/12 text-teal-600'
    return 'bg-gray-100 dark:bg-gray-700 text-gray-400'
  }

  return (
    <div className="flex flex-col gap-0">

      <div className="mb-4">
        <h2 className="flex items-center gap-2.5 text-[18px] font-bold text-gray-900 dark:text-white mb-1">
          <Star size={20} color="#667eea" />
          Ranked Routes
        </h2>
        <p className="text-[13px] text-gray-400">{buses.length} option{buses.length !== 1 ? 's' : ''} found</p>
      </div>

      <div className="flex flex-col gap-3">
        {buses.map((bus) => {
          const isSelected      = selectedBus?.busId === bus.busId
          const label           = getRouteLabel(bus, buses)
          const leg1            = bus.leg1 as any
          const leg2            = bus.leg2 as any
          const transferStop    = bus.transferStop as any
          const originStop      = bus.originStop as any
          const destinationStop = bus.destinationStop as any
          const upcomingDepartures = bus.upcomingDepartures as any[]

          const routeDisplay = bus.journeyType === 'transfer' && leg1 && leg2
            ? `${leg1.routeNumber} → ${leg2.routeNumber}`
            : bus.routeNumber

          const ridingTime      = Math.round(bus.travelTime)
          const totalJourney    = Math.round((bus.totalJourneyTime as number) ?? bus.travelTime)
          const directRideLabel = bus.journeyType !== 'transfer' ? ridingTime : null

          return (
            <div
              key={bus.busId}
              ref={el => { cardRefs.current[bus.busId] = el }}
              onClick={() => onSelectBus(bus)}
              className={`relative rounded-2xl p-3.5 cursor-pointer border-2 transition-all duration-200
                ${isSelected
                  ? 'border-[#0a1628] bg-[#0a1628] text-white shadow-xl'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-yellow-400 hover:shadow-[0_6px_20px_rgba(240,165,0,0.12)] hover:-translate-y-0.5'
                }`}
            >
              {/* Save button */}
              {user && onSaveJourney && (
                <button
                  onClick={e => { e.stopPropagation(); onSaveJourney() }}
                  disabled={isSavingJourney || journeyAlreadySaved}
                  className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-lg border-[1.5px] flex items-center justify-center z-10 transition-all
                    ${journeyAlreadySaved
                      ? 'border-teal-500 text-teal-500 bg-teal-500/8'
                      : isSelected
                        ? 'border-white/20 text-white/60 bg-white/10'
                        : 'border-gray-200 text-gray-400 bg-gray-50 hover:border-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/8'
                    }`}
                >
                  {isSavingJourney
                    ? <div className="w-3 h-3 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
                    : journeyAlreadySaved
                      ? <BookmarkCheck size={14} />
                      : <Bookmark size={14} />
                  }
                </button>
              )}

              {/* Top row */}
              <div className="flex items-center gap-2 mb-2.5 pr-10 pl-1">
                <div
                  className="min-w-[54px] h-[50px] px-2.5 flex items-center justify-center text-white text-[13px] font-extrabold rounded-xl shrink-0 text-center"
                  style={{ backgroundColor: bus.color || '#667eea' }}
                >
                  {routeDisplay}
                </div>

                <div className="flex-1 min-w-0 flex flex-col gap-1">
                  <div className="flex items-center gap-1 min-w-0">
                    <span className={`text-xs font-bold truncate flex-1 ${isSelected ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {originStop?.name?.split(',')[0]}
                    </span>
                    <ArrowRight size={11} className="text-gray-400 shrink-0" />
                    <span className={`text-xs font-bold truncate flex-1 ${isSelected ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                      {destinationStop?.name?.split(',')[0]}
                    </span>
                  </div>
                  <div className="flex gap-1.5 flex-wrap mt-1">
                    {bus.journeyType === 'transfer'
                      ? <span className="text-[11px] font-semibold bg-yellow-400/12 text-yellow-600 px-2 py-0.5 rounded-md">Transfer</span>
                      : <span className="text-[11px] font-semibold bg-teal-500/12 text-teal-600 px-2 py-0.5 rounded-md">Direct</span>
                    }
                  </div>
                </div>
              </div>

              {/* TOPSIS label */}
              {label.text && (
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-2 ${getLabelStyle(label.color)}`}>
                  {label.text}
                </span>
              )}

              {/* Criteria grid */}
              <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                {[
                  { icon: <Navigation size={15} color="#667eea" />, label: 'Departs',   value: bus.departureTime || `${bus.arrivalTime} min` },
                  { icon: <Clock size={15} color="#667eea" />,      label: 'Wait',      value: `${bus.arrivalTime} min` },
                  { icon: <Clock size={15} color="#9C27B0" />,      label: 'Journey',   value: `${ridingTime} min` },
                  { icon: <MapPin size={15} color="#FF9800" />,     label: 'Walk',      value: `${bus.walkingDistance} km (${bus.walkingTime} min)` },
                  { icon: <GitMerge size={15} color="#F44336" />,   label: 'Transfers', value: `${bus.transfers}` },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg
                      ${isSelected ? 'bg-white/10' : 'bg-gray-50 dark:bg-gray-700/50'}`}
                  >
                    {icon}
                    <span className={`text-xs shrink-0 ${isSelected ? 'text-white/60' : 'text-gray-400'}`}>{label}</span>
                    <span className={`font-semibold ml-auto text-xs ${isSelected ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{value}</span>
                  </div>
                ))}

                {/* Fare */}
                <div className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg
                  ${isSelected ? 'bg-white/10' : 'bg-gray-50 dark:bg-gray-700/50'}`}>
                  <CreditCard size={15} color="#4CAF50" />
                  <span className={`text-xs shrink-0 ${isSelected ? 'text-white/60' : 'text-gray-400'}`}>Fare</span>
                  <div className="ml-auto text-right">
                    <div className="text-[13px] font-bold text-teal-500">Nol {bus.nolFare ?? bus.cost} AED</div>
                    <div className={`text-[11px] ${isSelected ? 'text-white/50' : 'text-gray-400'}`}>Cash {bus.cashFare ?? (bus.cost + 1)} AED</div>
                  </div>
                </div>

                {/* Balance warning */}
                {walletBalance !== null && walletBalance < (bus.nolFare ?? bus.cost) && (
                  <div className="col-span-2 flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-red-500/8 border border-red-500/25">
                    <DollarSign size={13} color="#ef4444" />
                    <span className="text-xs font-semibold text-red-500">
                      Top up {((bus.nolFare ?? bus.cost) - walletBalance!).toFixed(2)} AED needed
                    </span>
                  </div>
                )}
              </div>

              {/* Upcoming departures */}
              {upcomingDepartures && upcomingDepartures.length > 1 && (
                <div className={`flex flex-col gap-1.5 px-3 py-2.5 rounded-lg mb-3 border
                  ${isSelected ? 'bg-white/8 border-white/15' : 'bg-[#667eea]/6 border-[#667eea]/15'}`}>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider ${isSelected ? 'text-white/50' : 'text-gray-400'}`}>
                    Also departs
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {upcomingDepartures.slice(1).map((dep: any, i: number) => (
                      <span
                        key={i}
                        className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md border
                          ${isSelected
                            ? 'bg-white/15 border-white/20 text-white'
                            : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white'
                          }`}
                      >
                        {dep.departureTime}
                        <span className={`text-[10px] font-normal ${isSelected ? 'text-white/50' : 'text-gray-400'}`}>
                          +{dep.minutesFromNow} min
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline */}
              {isSelected && (
                <div className="mt-3.5 pt-3.5 border-t border-white/10 flex flex-col">
                  {[
                    {
                      dot: '🚶', dotClass: 'bg-yellow-400/15',
                      title: `Walk to ${originStop?.name}`,
                      sub:   `${bus.walkingDistance} km · ${bus.walkingTime} min`,
                      time:  null,
                    },
                    {
                      dot: '🚌', dotClass: 'bg-[#667eea]/15',
                      title: `Board ${bus.journeyType === 'transfer' ? leg1?.routeNumber : bus.routeNumber}`,
                      sub:   `${bus.journeyType === 'transfer' ? leg1?.routeName : bus.routeName}${
                        bus.journeyType === 'transfer' && leg1?.duration
                          ? ` · ${Math.round(leg1.duration)} min`
                          : directRideLabel ? ` · ${directRideLabel} min` : ''
                      }`,
                      time: bus.departureTime,
                    },
                    ...(bus.journeyType === 'transfer' && transferStop ? [{
                      dot: '🔄', dotClass: 'bg-teal-500/15',
                      title: `Transfer at ${transferStop?.name}`,
                      sub:   `Board ${leg2?.routeNumber}${leg2?.duration ? ` · ${Math.round(leg2.duration)} min` : ''}`,
                      time:  leg2?.departureTime ?? null,
                    }] : []),
                    {
                      dot: '📍', dotClass: 'bg-green-500/15',
                      title: `Arrive at ${destinationStop?.name}`,
                      sub:   `Total journey: ${totalJourney} min`,
                      time:  (bus.destinationArrivalTime as string) ?? null,
                    },
                  ].map((step, i, arr) => (
                    <div key={i} className="flex gap-3 relative">
                      {i < arr.length - 1 && (
                        <div className="absolute left-[13px] top-[26px] bottom-[-4px] w-0.5 bg-white/20 z-0" />
                      )}
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[13px] z-10 mb-1 ${step.dotClass}`}>
                        {step.dot}
                      </div>
                      <div className="flex-1 min-w-0 pt-1 pb-4">
                        <p className="text-[13px] font-bold text-white mb-0.5 leading-snug">{step.title}</p>
                        <p className="text-[11px] text-white/60 m-0">{step.sub}</p>
                      </div>
                      {step.time && (
                        <span className="text-xs font-bold text-yellow-400 pt-1 shrink-0">{step.time}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Select button */}
              <button
                className={`w-full py-2.5 rounded-lg text-[13px] font-bold border-2 transition-all duration-200
                  ${isSelected
                    ? 'bg-yellow-400 text-[#0a1628] border-yellow-400'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600 hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628]'
                  }`}
              >
                {isSelected ? 'Selected' : 'View on Map'}
              </button>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BusResults