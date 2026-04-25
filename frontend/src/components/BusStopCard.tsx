import { useState, useEffect } from 'react';
import { MapPin, X, Star, Clock } from 'lucide-react';
import type { BusStop,  User,Departure,RouteOnStop } from '../lib/types';

 

interface BusStopCardProps {
  stop: BusStop | null;
  loadingStop?: boolean;
  onClose: () => void;
  isFavorite?: boolean;
  onAddFavorite: (stop: BusStop) => Promise<void>;
  onRemoveFavorite: (stopId: string) => Promise<void>;
  onSetAsOrigin?: (stop: BusStop) => void;
  onSetAsDestination?: (stop: BusStop) => void;
  user: User | null;
}

const getNextDepartures = (frequencyMin: number, count = 3): Departure[] => {
  const now         = new Date();
  const firstOffset = Math.floor(Math.random() * 5) + 1;
  return Array.from({ length: count }, (_, i) => {
    const minsFromNow = firstOffset + i * frequencyMin;
    const time        = new Date(now.getTime() + minsFromNow * 60000);
    return {
      minsFromNow,
      formatted: time.toLocaleTimeString('en-AE', { hour: '2-digit', minute: '2-digit', hour12: true }),
    };
  });
};

const BusStopCard = ({
  stop,
  loadingStop = false,
  onClose,
  isFavorite  = false,
  onAddFavorite,
  onRemoveFavorite,
  onSetAsOrigin,
  onSetAsDestination,
  user,
}: BusStopCardProps) => {
  const [departures, setDepartures] = useState<Record<string, Departure[]>>({});
  const [favPending, setFavPending] = useState(false);

  useEffect(() => {
    if (!stop?.routes?.length) return;
    const board: Record<string, Departure[]> = {};
    (stop.routes as unknown as RouteOnStop[]).forEach(route => {
      const freq = route.schedule?.weekday?.frequency ?? 15;
      board[route.routeNumber] = getNextDepartures(freq, 3);
    });
    setDepartures(board);
  }, [stop?.routes]);

  const handleFavoriteToggle = async () => {
    if (!user || favPending || !stop) return;
    setFavPending(true);
    try {
      isFavorite ? await onRemoveFavorite(stop.stopId) : await onAddFavorite(stop);
    } finally {
      setFavPending(false);
    }
  };

  if (!stop) return null;

  return (
    <div className="absolute top-4 right-4 bg-white border-[1.5px] border-gray-200 rounded-2xl shadow-[0_8px_32px_rgba(10,22,40,0.15)] p-4 w-[300px] z-[1000] animate-[cardIn_0.25s_ease]">

   
      <button
        onClick={onClose}
        className="absolute top-3 right-3 bg-gray-100 border-none cursor-pointer p-[5px] rounded-[6px] flex items-center justify-center text-gray-400 transition-all duration-150 hover:bg-gray-200 hover:text-gray-900"
      >
        <X size={16} />
      </button>

     
      <div className="flex items-center gap-[10px] mb-[14px] pr-7">
        <div className="w-[30px] h-[30px] bg-[#0a1628] rounded-[8px] flex items-center justify-center text-[#f0a500] flex-shrink-0">
          <MapPin size={16} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="m-0 mb-[2px] font-['Syne'] text-[14px] font-bold text-gray-900 leading-[1.3] whitespace-nowrap overflow-hidden text-ellipsis">
            {stop.name}
          </h3>
          <p className="m-0 text-[11px] text-gray-400 font-mono">
            Stop ID: {stop.stopId}
          </p>
        </div>

        {user && (
          <button
            onClick={handleFavoriteToggle}
            disabled={favPending}
            title={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
            className={`w-[30px] h-[30px] rounded-[8px] border-[1.5px] flex items-center justify-center cursor-pointer flex-shrink-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
              ${isFavorite
                ? 'border-[#f0a500] text-[#f0a500] bg-[rgba(240,165,0,0.1)]'
                : 'border-gray-200 text-gray-400 bg-transparent hover:border-[#f0a500] hover:text-[#f0a500]'
              }`}
          >
            <Star size={15} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        )}
      </div>

      {/*  conditional rendering loading*/}
      {loadingStop ? (
        <div className="flex justify-center py-4">
          <div className="w-[18px] h-[18px] border-2 border-gray-200 border-t-[#f0a500] rounded-full animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col gap-3">

          {/* depratur board */}
          {stop.routes && stop.routes.length > 0 && (
            <div className="flex flex-col gap-[6px]">
              <p className="m-0 text-[11px] font-bold uppercase tracking-[0.6px] text-gray-400 flex items-center gap-[5px]">
                <Clock size={12} />
                Next Departures
              </p>
              <div className="flex flex-col gap-[6px]">
                {(stop.routes as unknown as RouteOnStop[]).map((route) => {
                  const deps = departures[route.routeNumber] ?? [];
                  return (
                    <div key={route.routeNumber} className="flex items-center gap-2">
                      <span
                        className="text-white px-[9px] py-[3px] rounded-[6px] text-[11px] font-bold font-['Syne'] flex-shrink-0 min-w-[36px] text-center"
                        style={{ background: route.color || '#667eea' }}
                      >
                        {route.routeNumber}
                      </span>
                      <div className="flex gap-[6px] flex-wrap">
                        {deps.map((d, i) => (
                          <span
                            key={i}
                            className="bg-gray-50 border border-gray-200 rounded-[6px] px-2 py-[3px] text-[11px] font-semibold text-gray-800 font-['DM_Sans']"
                          >
                            {d.minsFromNow < 1 ? 'Now' : d.minsFromNow < 60 ? `${d.minsFromNow} min` : d.formatted}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* co ordinates  */}
          <div className="flex flex-col gap-[6px]">
            <p className="m-0 text-[11px] font-bold uppercase tracking-[0.6px] text-gray-400">
              Location
            </p>
            <p className="m-0 text-[11px] text-gray-500 font-mono bg-gray-50 px-[10px] py-[6px] rounded-[6px] border border-gray-200">
              {stop.lat.toFixed(5)}, {stop.lng.toFixed(5)}
            </p>
          </div>

          {/*    ammenties  */}
          {stop.amenities && stop.amenities.length > 0 && (
            <div className="flex flex-col gap-[6px]">
              <p className="m-0 text-[11px] font-bold uppercase tracking-[0.6px] text-gray-400">
                Amenities
              </p>
              <ul className="m-0 pl-[14px] text-[12px] text-gray-500">
                {stop.amenities.map((a, i) => (
                  <li key={i} className="mb-[3px]">{a}</li>
                ))}
              </ul>
            </div>
          )}

           
          <div className="flex gap-[6px] mt-1">
            <button
              onClick={() => onSetAsOrigin?.(stop)}
              className="flex-1 py-2 px-[10px] border-[1.5px] border-gray-200 rounded-[8px] bg-gray-50 text-gray-800 font-['DM_Sans'] text-[11px] font-bold cursor-pointer transition-all duration-[180ms] text-center hover:border-[#00c9a7] hover:bg-[rgba(0,201,167,0.08)] hover:text-[#00c9a7]"
            >
              Set as Origin
            </button>
            <button
              onClick={() => onSetAsDestination?.(stop)}
              className="flex-1 py-2 px-[10px] border-[1.5px] border-gray-200 rounded-[8px] bg-gray-50 text-gray-800 font-['DM_Sans'] text-[11px] font-bold cursor-pointer transition-all duration-[180ms] text-center hover:border-[#00c9a7] hover:bg-[rgba(0,201,167,0.08)] hover:text-[#00c9a7]"
            >
              Set as Destination
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default BusStopCard;