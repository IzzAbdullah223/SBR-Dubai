import { useState, useMemo, useEffect } from 'react'
import MapView          from '../components/MapView'
import SearchInput      from '../components/SearchInput'
import BusResults       from '../components/BusResults'
import SavedRoutes      from '../components/SavedRoutes'
import FavoriteStops    from '../components/FavoriteStops'
import Navbar           from '../components/Navbar'
import Modal            from '../components/Modal'
import { Login }        from '../components/auth/Login'
import { SignUp }       from '../components/auth/SignUp'
import { Search, X }   from 'lucide-react'
import { MAP_CONFIG }   from '../utils/constants'

import useFindBuses        from '../hooks/useFindBuses'
import useShape            from '../hooks/useShape'
import useSavedRoutes      from '../hooks/useSavedRoutes'
import useBusStop          from '../hooks/useBusStop'
import useFavoriteStops    from '../hooks/useFavoriteStops'
import useLocationPicker   from '../hooks/useLocationPicker'
import useOptimizationMode from '../hooks/useOptimizationMode'

import type { User, Bus } from '../lib/types'

interface HomeProps {
  user:                 User | null
  theme?:               'light' | 'dark'
  walletBalance?:       number | null
  showLogin:            boolean
  showSignUp:           boolean
  handleLoginSuccess:   (user: User) => void
  handleSwitchToSignUp: () => void
  handleSwitchToLogin:  () => void
  openLogin:            () => void
  openSignUp:           () => void
  closeLogin:           () => void
  closeSignUp:          () => void
}

const modes = [
  { value: 'fastest',          icon: '🚀', label: 'Fastest'          },
  { value: 'cheapest',         icon: '💰', label: 'Cheapest'         },
  { value: 'less_walking',     icon: '🚶', label: 'Less Walking'     },
  { value: 'fewest_transfers', icon: '🔄', label: 'Fewest Transfers' },
]

const Home = ({
  user,
  theme              = 'light',
  walletBalance      = null,
  showLogin,
  showSignUp,
  handleLoginSuccess,
  handleSwitchToSignUp,
  handleSwitchToLogin,
  openLogin,
  openSignUp,
  closeLogin,
  closeSignUp,
}: HomeProps) => {

  const {
    origin, destination,
    originInput, destinationInput,
    pinnedOrigin, pinnedDest,
    programmaticFill, inputError, setInputError,
    handleOriginChange, handleDestinationChange,
    fillFromSavedRoute,
    pinStopAsOrigin, pinStopAsDestination,
    clearPinnedOrigin, clearPinnedDest,
    resetLocations,
  } = useLocationPicker()

 
  const { buses, setBuses, loading, error, errorType, findBuses, clearResults } = useFindBuses()
  const { optimizationMode, handleModeChange, ranking } = useOptimizationMode(user, buses, setBuses)

  const [selectedBus, setSelectedBus] = useState<Bus | null>(null)
  const { shapeCoordinates, shapeCoordinatesLeg2 } = useShape(selectedBus)
  const { selectedStop, loadingStop, selectStop, clearStop } = useBusStop()
  const { favoriteStops, addFavorite, removeFavorite, isFavorite } = useFavoriteStops(user)
  const {
    savedRoutes, loadingSaved, savingKey, saveError,
    showSaved, saveRoute, deleteSavedRoute,
    toggleSavedPanel, setSaveError, isJourneySaved,
  } = useSavedRoutes(user)

  const [showFavorites, setShowFavorites] = useState(false)

  const isSavingJourney     = !!(origin && destination && savingKey === `${origin.name}__${destination.name}`)
  const journeyAlreadySaved = !!(origin && destination && isJourneySaved(origin.lat, origin.lng, destination.lat, destination.lng))

 
  useEffect(() => {
    if (buses?.length > 0) setSelectedBus(buses[0] ?? null)
  }, [buses])

  const handleFindBuses = async () => {
    if (!origin || !destination) {
      setInputError('Please select your origin and destination from the dropdown suggestions.')
      return
    }
    setSelectedBus(null)
    clearStop()
    clearResults()
    setSaveError(null)
    await findBuses(
      { lat: origin.lat, lng: origin.lng },
      { lat: destination.lat, lng: destination.lng },
      optimizationMode
    )
  }

  const handleReset = () => {
    resetLocations()
    setSelectedBus(null)
    clearStop()
    setSaveError(null)
    clearResults()
  }

  const handleSelectBus            = (bus: Bus)   => { setSelectedBus(bus); clearStop() }
  const handleSaveJourney          = async ()     => { if (!origin || !destination) return; await saveRoute(origin, destination) }
  const handleSelectSavedJourney   = (route: any) => { fillFromSavedRoute(route); if (showSaved) toggleSavedPanel() }
  const handleFavoriteStopClick    = (stop: any)  => selectStop(stop)
  const handleSetStopAsOrigin      = (stop: any)  => { pinStopAsOrigin(stop);      clearStop() }
  const handleSetStopAsDestination = (stop: any)  => { pinStopAsDestination(stop); clearStop() }

  const mapStops = useMemo(() => {
    if (!selectedBus) return []
    const stops: any[] = []
    const b = selectedBus as any
    if (b.originStop)      stops.push(b.originStop)
    if (b.transferStop)    stops.push(b.transferStop)
    if (b.destinationStop) stops.push(b.destinationStop)
    return stops
  }, [selectedBus])

  return (
    <div className="flex flex-col h-screen overflow-hidden font-['DM_Sans'] bg-[#0a1628]">

      <Navbar onSignUpClick={openSignUp} onLoginClick={openLogin} user={user} />

      <div className="flex flex-1 overflow-hidden min-h-0">

        {/*  left panel */}
        <div className="w-[460px] min-w-[460px] bg-gray-50 flex flex-col overflow-y-auto flex-shrink-0 border-r border-gray-200 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">

          <div className="px-6 pt-6 pb-4 flex-shrink-0">

            <div className="mb-3">
              <SavedRoutes
                savedRoutes={savedRoutes}
                loading={loadingSaved}
                onDelete={deleteSavedRoute}
                onSelectJourney={handleSelectSavedJourney}
                user={user}
                isOpen={showSaved}
                onToggle={toggleSavedPanel}
              />
            </div>

            <FavoriteStops
              favoriteStops={favoriteStops}
              user={user}
              onStopClick={handleFavoriteStopClick}
              onDelete={removeFavorite}
              isOpen={showFavorites}
              onToggle={() => setShowFavorites(v => !v)}
            />

            <p className="font-['Syne'] text-[16px] font-bold text-gray-900 block w-full border-b border-gray-200 mt-6 mb-4 pb-1">
              Where are you going?
            </p>

            <SearchInput
              label="From"
              placeholder="Search origin..."
              value={originInput}
              onChange={handleOriginChange}
              disableSuggestions={programmaticFill}
              pinnedStop={pinnedOrigin}
              onClearPin={clearPinnedOrigin}
            />

            <SearchInput
              label="To"
              placeholder="Search destination..."
              value={destinationInput}
              onChange={handleDestinationChange}
              disableSuggestions={programmaticFill}
              pinnedStop={pinnedDest}
              onClearPin={clearPinnedDest}
            />
          </div>

          {/*   optimization mode  */}
          <div className="mx-6 mb-4 p-[14px_16px] bg-white border-[1.5px] border-gray-200 rounded-xl flex-shrink-0">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.5px] m-0 mb-[10px]">
              Optimize for
            </p>
            <div className="grid grid-cols-4 gap-[6px]">
              {modes.map(({ value, icon, label }) => (
                <button
                  key={value}
                  onClick={() => handleModeChange(value)}
                  disabled={ranking}
                  className={`flex flex-col items-center gap-1 py-2 px-1 border-[1.5px] rounded-xl cursor-pointer transition-all duration-[180ms] disabled:opacity-50
                    ${optimizationMode === value
                      ? 'border-[#f0a500] bg-[rgba(240,165,0,0.12)]'
                      : 'border-gray-200 bg-gray-50 hover:border-[#f0a500] hover:bg-[rgba(240,165,0,0.06)]'
                    }`}
                >
                  <span className="text-[18px] leading-none">{icon}</span>
                  <span className="text-[11px] font-semibold text-gray-800 whitespace-nowrap">{label}</span>
                </button>
              ))}
            </div>
            {!user && (
              <p className="text-[11px] text-gray-400 mt-2 mb-0">
                <span
                  onClick={openLogin}
                  className="text-[#f0a500] font-semibold cursor-pointer underline hover:text-[#f5b800]"
                >
                  Log in
                </span>{' '}
                to save your preferred mode
              </p>
            )}
          </div>

          {/*  find buses */}
          <div className="flex gap-2 mx-6 mb-5 flex-shrink-0">
            <button
              onClick={handleFindBuses}
              disabled={!origin || !destination || loading || ranking}
              className="flex-1 relative overflow-hidden py-4 px-4 bg-[#0a1628] text-white border-none rounded-xl font-['Syne'] text-[15px] font-bold cursor-pointer flex items-center justify-center gap-[10px] transition-all duration-[250ms] tracking-[0.3px] flex-shrink-0 disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed group"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-[#f0a500] transition-[width] duration-[400ms] ease group-hover:w-full z-0" />
              <Search size={20} className="relative z-10 transition-colors duration-[400ms] group-hover:text-[#0a1628]" />
              <span className="relative z-10 transition-colors duration-[400ms] group-hover:text-[#0a1628]">
                {loading ? 'Searching...' : ranking ? 'Ranking...' : 'Find Buses'}
              </span>
            </button>

            {(originInput || destinationInput || pinnedOrigin || pinnedDest || buses.length > 0) && (
              <button
                onClick={handleReset}
                title="Clear all"
                className="w-[52px] min-w-[52px] h-[52px] flex items-center justify-center bg-white border-2 border-gray-200 rounded-xl cursor-pointer text-gray-500 transition-all duration-200 flex-shrink-0 hover:border-red-400 hover:text-red-400 hover:bg-[rgba(255,77,109,0.06)]"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/*  errors */}
          {inputError && (
            <div className="mx-6 mb-4 px-4 py-[14px] rounded-xl text-[14px] font-medium flex-shrink-0 leading-[1.5] bg-[rgba(255,77,109,0.08)] border border-[rgba(255,77,109,0.25)] border-l-4 border-l-red-400 text-red-500">
              {inputError}
            </div>
          )}
          {error && (
            <div className={`mx-6 mb-4 px-4 py-[14px] rounded-xl text-[14px] font-medium flex-shrink-0 leading-[1.5]
              ${errorType === 'info'
                ? 'bg-[rgba(240,165,0,0.08)] border border-[rgba(240,165,0,0.25)] border-l-4 border-l-[#f0a500] text-[#b07800]'
                : 'bg-[rgba(255,77,109,0.08)] border border-[rgba(255,77,109,0.25)] border-l-4 border-l-red-400 text-red-500'
              }`}
            >
              {error}
            </div>
          )}
          {saveError && (
            <div className="mx-6 mb-4 px-4 py-[14px] rounded-xl text-[14px] font-medium flex-shrink-0 leading-[1.5] bg-[rgba(255,77,109,0.08)] border border-[rgba(255,77,109,0.25)] border-l-4 border-l-red-400 text-red-500">
              {saveError}
            </div>
          )}

          {/*  bus results */}
          {(buses.length > 0 || loading) && (
            <div className="px-6 pb-5 flex-shrink-0">
              <BusResults
                buses={buses}
                onSelectBus={handleSelectBus}
                selectedBus={selectedBus}
                loading={loading || ranking}
                onSaveJourney={handleSaveJourney}
                isSavingJourney={isSavingJourney}
                journeyAlreadySaved={journeyAlreadySaved}
                user={user}
                walletBalance={walletBalance}
              />
            </div>
          )}

        </div>

        {/* right panel the map */}
        <div className="flex-1 relative overflow-hidden min-w-0">
          <MapView
            origin={origin ?? { lat: MAP_CONFIG.DEFAULT_CENTER.lat, lng: MAP_CONFIG.DEFAULT_CENTER.lng }}
            destination={destination}
            busStops={mapStops}
            selectedRoute={selectedBus}
            shapeCoordinates={shapeCoordinates}
            shapeCoordinatesLeg2={shapeCoordinatesLeg2}
            selectedStop={selectedStop}
            loadingStop={loadingStop}
            onStopClick={selectStop}
            onStopClose={clearStop}
            isFavorite={isFavorite}
            onAddFavorite={addFavorite}
            onRemoveFavorite={removeFavorite}
            onSetAsOrigin={handleSetStopAsOrigin}
            onSetAsDestination={handleSetStopAsDestination}
            user={user}
            theme={theme}
          />
        </div>

      </div>

      {/* open close signup/login modal */}
      <Modal isOpen={showSignUp} onClose={closeSignUp}>
        <SignUp onLoginSuccess={handleLoginSuccess} />
      </Modal>
      <Modal isOpen={showLogin} onClose={closeLogin}>
        <Login onLoginSuccess={handleLoginSuccess} onSwitchToSignUp={handleSwitchToSignUp} />
      </Modal>

    </div>
  )
}

export default Home