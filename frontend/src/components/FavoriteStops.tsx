import { Star, MapPin, Trash2, X } from 'lucide-react';
import type { FavoriteStop, User } from '../lib/types';

interface FavoriteStopsProps {
  favoriteStops: FavoriteStop[];
  user: User | null;
  onStopClick: (stop: FavoriteStop) => void;
  onDelete: (stopId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FavoriteStops = ({
  favoriteStops,
  user,
  onStopClick,
  onDelete,
  isOpen,
  onToggle,
}: FavoriteStopsProps) => {

  if (!user) return null;

 
  if (!isOpen) {
    return (
      <div className="mb-[10px]">
        <div className="flex items-center gap-2">

          <button
            onClick={onToggle}
            title="My Stops"
            className="flex items-center gap-[6px] px-3 py-[7px] bg-[#0a1628] border-none rounded-full cursor-pointer flex-shrink-0 w-[130px] justify-start transition-colors duration-200 hover:bg-[#0f1f38]"
          >
            <Star size={13} className="text-[#f0a500]" />
            <span className="font-['Syne'] text-[12px] font-bold text-white whitespace-nowrap">
              My Stops
            </span>
            {favoriteStops.length > 0 && (
              <span className="bg-[#f0a500] text-[#0a1628] text-[10px] font-extrabold px-[6px] py-[1px] rounded-full leading-[1.5]">
                {favoriteStops.length}
              </span>
            )}
          </button>

          {favoriteStops.length > 0 && (
            <div className="flex gap-[6px] flex-1 overflow-visible">
              {favoriteStops.slice(0, 2).map((stop) => (
                <button
                  key={stop.stopId}
                  onClick={() => onStopClick(stop)}
                  title={stop.name}
                  className="flex items-center gap-[5px] px-3 py-[7px] bg-white border-[1.5px] border-gray-200 rounded-full cursor-pointer flex-shrink-0 w-[135px] overflow-hidden transition-all duration-[180ms] ease font-['DM_Sans'] text-[12px] font-semibold text-gray-800 hover:border-[#f0a500] hover:bg-[rgba(240,165,0,0.06)] hover:-translate-y-px hover:shadow-[0_3px_8px_rgba(240,165,0,0.15)]"
                >
                  <div className="w-[7px] h-[7px] rounded-full bg-[#f0a500] flex-shrink-0" />
                  <span className="whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
                    {stop.name.split(',')[0]}
                  </span>
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    );
  }

 
  return (
    <div className="mb-[10px]">
      <div className="bg-white border-[1.5px] border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(10,22,40,0.08)] animate-[panelOpen_0.22s_ease]">

    
        <div className="flex items-center justify-between px-4 pt-[14px] pb-[10px] border-b-[1.5px] border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#0a1628] to-[#1a3a6e] rounded-[9px] flex items-center justify-center">
              <Star size={15} className="text-[#f0a500]" />
            </div>
            <span className="font-['Syne'] text-[14px] font-bold text-gray-900">
              My Stops
            </span>
            {favoriteStops.length > 0 && (
              <span className="bg-gray-100 text-gray-500 text-[11px] font-bold px-2 py-[2px] rounded-full font-['DM_Sans']">
                {favoriteStops.length} saved
              </span>
            )}
          </div>
          <button
            onClick={onToggle}
            className="w-7 h-7 bg-gray-100 border-none rounded-[8px] flex items-center justify-center cursor-pointer text-gray-500 transition-all duration-150 hover:bg-gray-200 hover:text-gray-900"
          >
            <X size={14} />
          </button>
        </div>

   
        {favoriteStops.length === 0 ? (
          <div className="flex flex-col items-center px-5 py-6 text-center gap-[6px]">
            <div className="text-[32px] mb-1 leading-none">star here</div>
            <p className="font-['Syne'] text-[13px] font-bold text-gray-900 m-0">
              No favourite stops yet
            </p>
            <p className="text-[12px] text-gray-400 m-0 leading-[1.5] max-w-[200px]">
              Tap a stop on the map and star it for quick access
            </p>
          </div>
        ) : (
          <div className="max-h-[220px] overflow-y-auto p-2 flex flex-col gap-1 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
            {favoriteStops.map((stop) => (
              <div
                key={stop.stopId}
                onClick={() => { onStopClick(stop); onToggle(); }}
                className="flex items-center gap-[10px] px-3 py-[10px] pr-10 rounded-xl cursor-pointer transition-all duration-[180ms] border-[1.5px] border-transparent relative hover:bg-gray-50 hover:border-gray-200 group"
              >
                {/* Stop icon */}
                <div className="w-7 h-7 rounded-[8px] bg-[rgba(240,165,0,0.1)] border border-[rgba(240,165,0,0.2)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-[#f0a500]" />
                </div>

                {/* Stop info */}
                <div className="flex-1 min-w-0 flex flex-col gap-[2px]">
                  <span className="text-[13px] font-bold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis leading-[1.4]">
                    {stop.name.split(',')[0]}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {stop.stopId}
                  </span>
                </div>

                {/* Delete button */}
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(stop.stopId); }}
                  title="Remove"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 border-none bg-[rgba(255,77,109,0.1)] text-[#ff4d6d] rounded-[6px] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:bg-[rgba(255,77,109,0.2)]"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default FavoriteStops;