import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  originIcon, destinationIcon,
  busStopIcon, selectedBusStopIcon,
  originStopIcon, transferStopIcon, destinationStopIcon,
  userLocationIcon,
} from '../utils/mapIcons';
import { MAP_CONFIG } from '../utils/constants';
import BusStopCard from './BusStopCard';
import type { BusStop, User, Coordinate, Bus } from '../lib/types';

interface Location {
  lat: number;
  lng: number;
  name?: string;
}

interface MapViewProps {
  origin:                Location | null;
  destination:           Location | null;
  busStops?:             BusStop[];
  selectedRoute?:        Bus | null;
  shapeCoordinates?:     Coordinate[] | null;
  shapeCoordinatesLeg2?: Coordinate[] | null;
  selectedStop?:         BusStop | null;
  loadingStop?:          boolean;
  onStopClick?:          (stop: BusStop) => void;
  onStopClose?:          () => void;
  isFavorite?:           (stopId: string) => boolean;
  onAddFavorite:         (stop: BusStop) => Promise<void>;
  onRemoveFavorite:      (stopId: string) => Promise<void>;
  onSetAsOrigin?:        (stop: BusStop) => void;
  onSetAsDestination?:   (stop: BusStop) => void;
  user:                  User | null;
  theme?:                'light' | 'dark';
}

interface SmartBoundsProps {
  origin:                Location | null;
  destination:           Location | null;
  selectedRoute:         Bus | null;
  shapeCoordinates:      Coordinate[] | null;
  shapeCoordinatesLeg2:  Coordinate[] | null;
  shapeKey:              string | null;
}

interface LocateButtonProps {
  onLocate: (coords: { lat: number; lng: number }) => void;
  onError:  (msg: string) => void;
}

const DUBAI_BOUNDS = { minLat: 24.7, maxLat: 25.4, minLng: 54.9, maxLng: 55.6 };
const isInDubai = (lat: number, lng: number) =>
  lat >= DUBAI_BOUNDS.minLat && lat <= DUBAI_BOUNDS.maxLat &&
  lng >= DUBAI_BOUNDS.minLng && lng <= DUBAI_BOUNDS.maxLng;

const InvalidateSize = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 100);
  }, []);
  return null;
};

const SmartBounds = ({
  origin, destination, selectedRoute,
  shapeCoordinates, shapeCoordinatesLeg2, shapeKey,
}: SmartBoundsProps) => {
  const map           = useMap();
  const lastShapeKey  = useRef<string | null>(null);
  const lastOriginLat = useRef<number | null>(null);
  const lastOriginLng = useRef<number | null>(null);
  const lastDestLat   = useRef<number | null>(null);
  const lastDestLng   = useRef<number | null>(null);

  useEffect(() => {
    if (origin?.lat && destination?.lat &&
        origin.lat === destination.lat &&
        origin.lng === destination.lng) return;

    const r = selectedRoute as any;

    if (selectedRoute && shapeKey && shapeKey !== lastShapeKey.current) {
      lastShapeKey.current = shapeKey;
      const points: [number, number][] = [];

      if ((shapeCoordinates?.length ?? 0) > 1)
        shapeCoordinates!.forEach(c => points.push([c.lat, c.lng]));
      if ((shapeCoordinatesLeg2?.length ?? 0) > 1)
        shapeCoordinatesLeg2!.forEach(c => points.push([c.lat, c.lng]));

      if (r?.originStop?.lat)      points.push([r.originStop.lat,      r.originStop.lng]);
      if (selectedRoute.journeyType === 'transfer' && r?.transferStop?.lat)
                                   points.push([r.transferStop.lat,    r.transferStop.lng]);
      if (r?.destinationStop?.lat) points.push([r.destinationStop.lat, r.destinationStop.lng]);

      if (points.length >= 2) {
        map.fitBounds(points, { paddingTopLeft: [60, 60], paddingBottomRight: [60, 60], maxZoom: 15 });
        return;
      }
      if (origin?.lat && destination?.lat)
        map.fitBounds(
          [[origin.lat, origin.lng], [destination.lat, destination.lng]],
          { paddingTopLeft: [60, 60], paddingBottomRight: [60, 60] }
        );
      return;
    }

    if (selectedRoute && shapeKey === lastShapeKey.current) {
      const hasShape = (shapeCoordinates?.length ?? 0) > 1 || (shapeCoordinatesLeg2?.length ?? 0) > 1;
      if (hasShape) {
        const points: [number, number][] = [];

        if ((shapeCoordinates?.length ?? 0) > 1)
          shapeCoordinates!.forEach(c => points.push([c.lat, c.lng]));
        if ((shapeCoordinatesLeg2?.length ?? 0) > 1)
          shapeCoordinatesLeg2!.forEach(c => points.push([c.lat, c.lng]));

        if (r?.originStop?.lat)      points.push([r.originStop.lat,      r.originStop.lng]);
        if (selectedRoute.journeyType === 'transfer' && r?.transferStop?.lat)
                                     points.push([r.transferStop.lat,    r.transferStop.lng]);
        if (r?.destinationStop?.lat) points.push([r.destinationStop.lat, r.destinationStop.lng]);

        if (points.length >= 2)
          map.fitBounds(points, { paddingTopLeft: [60, 60], paddingBottomRight: [60, 60], maxZoom: 15 });
      }
      return;
    }

    const originChanged = origin?.lat !== lastOriginLat.current || origin?.lng !== lastOriginLng.current;
    const destChanged   = destination?.lat !== lastDestLat.current || destination?.lng !== lastDestLng.current;

    if (origin?.lat && destination?.lat && (originChanged || destChanged)) {
      map.fitBounds(
        [[origin.lat, origin.lng], [destination.lat, destination.lng]],
        { paddingTopLeft: [80, 80], paddingBottomRight: [80, 80] }
      );
      lastOriginLat.current = origin.lat; lastOriginLng.current = origin.lng;
      lastDestLat.current   = destination.lat; lastDestLng.current = destination.lng;
      return;
    }

    if (origin?.lat && originChanged && !destination?.lat) {
      map.setView([origin.lat, origin.lng], 13);
      lastOriginLat.current = origin.lat; lastOriginLng.current = origin.lng;
    }
  }, [selectedRoute, shapeKey, shapeCoordinates, shapeCoordinatesLeg2, origin, destination]);

  return null;
};

const LocateButton = ({ onLocate, onError }: LocateButtonProps) => {
  const map = useMap();
  const [locating, setLocating] = useState(false);

  const handleLocate = () => {
    if (!navigator.geolocation) {
      onError('Location services are not supported by your browser.');
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        setLocating(false);
        if (!isInDubai(lat, lng)) {
          onError('You appear to be outside Dubai. Location tracking requires you to be in Dubai.');
          return;
        }
        map.setView([lat, lng], 15);
        onLocate({ lat, lng });
      },
      (err) => {
        setLocating(false);
        onError(err.code === err.PERMISSION_DENIED
          ? 'Location permission denied. Please enable location access in your browser settings.'
          : 'Unable to get your location. Please try again.');
      },
      { timeout: 10000, maximumAge: 30000 }
    );
  };

  return (
    <div
      onClick={handleLocate}
      title="Find my location"
      className="absolute top-[10px] right-[10px] z-[1000] w-[34px] h-[34px] bg-white rounded-[4px] shadow-[0_1px_5px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer text-gray-500 transition-all duration-150 hover:bg-gray-50 hover:text-blue-500"
    >
      {locating ? (
        <div className="w-[14px] h-[14px] border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
          <circle cx="12" cy="12" r="8" strokeWidth="1.5" strokeDasharray="2 3"/>
        </svg>
      )}
    </div>
  );
};

const MapView = ({
  origin, destination,
  busStops             = [],
  selectedRoute        = null,
  shapeCoordinates     = null,
  shapeCoordinatesLeg2 = null,
  selectedStop         = null,
  loadingStop          = false,
  onStopClick, onStopClose, isFavorite,
  onAddFavorite, onRemoveFavorite,
  onSetAsOrigin, onSetAsDestination,
  user,
}: MapViewProps) => {
  const [userLocation,  setUserLocation]  = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  const isValidCoord   = (val: unknown): val is number => typeof val === 'number' && !isNaN(val);
  const hasValidOrigin = origin && isValidCoord(origin.lat) && isValidCoord(origin.lng);
  const hasValidDest   = destination && isValidCoord(destination.lat) && isValidCoord(destination.lng);

  const center: [number, number] = hasValidOrigin
    ? [origin!.lat, origin!.lng]
    : [MAP_CONFIG.DEFAULT_CENTER.lat, MAP_CONFIG.DEFAULT_CENTER.lng];

  const r          = selectedRoute as any;
  const routeColor = r?.color ?? '#667eea';
  const leg2Color  = '#00c9a7';
  const shapeKey   = selectedRoute?.busId ?? null;

  const leg1Positions: [number, number][] | null =
    shapeCoordinates && shapeCoordinates.length > 1
      ? shapeCoordinates.map(c => [c.lat, c.lng]) : null;

  const leg2Positions: [number, number][] | null =
    shapeCoordinatesLeg2 && shapeCoordinatesLeg2.length > 1
      ? shapeCoordinatesLeg2.map(c => [c.lat, c.lng]) : null;

  const fallbackPositions: [number, number][] | null =
    !leg1Positions && hasValidOrigin && hasValidDest
      ? [[origin!.lat, origin!.lng], [destination!.lat, destination!.lng]] : null;

  const getStopIcon = (stop: BusStop) => {
    if (selectedStop?.stopId       === stop.stopId) return selectedBusStopIcon;
    if (r?.originStop?.stopId      === stop.stopId) return originStopIcon;
    if (r?.transferStop?.stopId    === stop.stopId) return transferStopIcon;
    if (r?.destinationStop?.stopId === stop.stopId) return destinationStopIcon;
    return busStopIcon;
  };

  const showLegend = selectedRoute && busStops.length > 0;

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={center}
        zoom={MAP_CONFIG.DEFAULT_ZOOM}
        className="h-full w-full absolute top-0 left-0 right-0 bottom-0 z-[1]"
        scrollWheelZoom={true}
        minZoom={MAP_CONFIG.MIN_ZOOM}
        maxZoom={MAP_CONFIG.MAX_ZOOM}
      >
        <TileLayer attribution={MAP_CONFIG.ATTRIBUTION} url={MAP_CONFIG.TILE_LAYER} />

        <InvalidateSize />

        <SmartBounds
          origin={origin} destination={destination}
          selectedRoute={selectedRoute}
          shapeCoordinates={shapeCoordinates}
          shapeCoordinatesLeg2={shapeCoordinatesLeg2}
          shapeKey={shapeKey}
        />

        <LocateButton
          onLocate={(coords) => { setUserLocation(coords); setLocationError(null); }}
          onError={(msg) => { setLocationError(msg); setTimeout(() => setLocationError(null), 3000); }}
        />

        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userLocationIcon}>
            <Popup>
              <div className="font-['DM_Sans'] min-w-[140px]">
                <strong className="text-[14px] font-bold text-[#0a1628] block mb-1">Your Location</strong>
              </div>
            </Popup>
          </Marker>
        )}

        {hasValidOrigin && !selectedRoute && (
          <Marker position={[origin!.lat, origin!.lng]} icon={originIcon}>
            <Popup>
              <div className="font-['DM_Sans'] min-w-[140px]">
                <strong className="text-[14px] font-bold text-[#0a1628] block mb-1">Origin</strong>
                <p className="text-[12px] text-gray-400 m-[2px_0]">{origin!.name ?? 'Starting point'}</p>
              </div>
            </Popup>
          </Marker>
        )}

        {hasValidDest && !selectedRoute && (
          <Marker position={[destination!.lat, destination!.lng]} icon={destinationIcon}>
            <Popup>
              <div className="font-['DM_Sans'] min-w-[140px]">
                <strong className="text-[14px] font-bold text-[#0a1628] block mb-1">Destination</strong>
                <p className="text-[12px] text-gray-400 m-[2px_0]">{destination!.name ?? 'End point'}</p>
              </div>
            </Popup>
          </Marker>
        )}

        {leg1Positions && (
          <>
            <Polyline positions={leg1Positions} color="#000000" weight={7} opacity={0.15} />
            <Polyline positions={leg1Positions} color={routeColor} weight={4} opacity={0.9} />
          </>
        )}

        {leg2Positions && (
          <>
            <Polyline positions={leg2Positions} color="#000000" weight={7} opacity={0.15} />
            <Polyline positions={leg2Positions} color={leg2Color} weight={4} opacity={0.9} />
          </>
        )}

        {fallbackPositions && (
          <Polyline positions={fallbackPositions} color="#667eea" weight={3} opacity={0.5} dashArray="8,12" />
        )}

        {busStops.map((stop) => {
          if (!isValidCoord(stop.lat) || !isValidCoord(stop.lng)) return null;
          return (
            <Marker
              key={stop.stopId}
              position={[stop.lat, stop.lng]}
              icon={getStopIcon(stop)}
              eventHandlers={{ click: () => onStopClick?.(stop) }}
            />
          );
        })}
      </MapContainer>

      {locationError && (
        <div
          onClick={() => setLocationError(null)}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-[rgba(255,77,109,0.92)] text-white font-['DM_Sans'] text-[13px] font-medium px-[18px] py-[10px] rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] cursor-pointer max-w-[320px] text-center animate-[slideDown_0.25s_ease]"
        >
          {locationError}
        </div>
      )}

      {showLegend && (
        <div className="absolute bottom-6 right-3 z-[1000] bg-white border border-gray-200 rounded-[8px] px-[10px] py-[7px] flex flex-col gap-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <div className="flex items-center gap-[7px] font-['DM_Sans'] text-[11px] font-semibold text-gray-800 whitespace-nowrap">
            <span className="w-[10px] h-[10px] rounded-full flex-shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.2)]" style={{ background: '#4CAF50' }} />
            Board
          </div>
          {r?.journeyType === 'transfer' && (
            <div className="flex items-center gap-[7px] font-['DM_Sans'] text-[11px] font-semibold text-gray-800 whitespace-nowrap">
              <span className="w-[10px] h-[10px] rounded-full flex-shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.2)]" style={{ background: '#f0a500' }} />
              Transfer
            </div>
          )}
          <div className="flex items-center gap-[7px] font-['DM_Sans'] text-[11px] font-semibold text-gray-800 whitespace-nowrap">
            <span className="w-[10px] h-[10px] rounded-full flex-shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.2)]" style={{ background: '#F44336' }} />
            Arrive
          </div>
        </div>
      )}

      {selectedStop && (
        <BusStopCard
          stop={selectedStop}
          loadingStop={loadingStop}
          onClose={() => onStopClose?.()}
          isFavorite={isFavorite ? isFavorite(selectedStop.stopId) : false}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          onSetAsOrigin={onSetAsOrigin}
          onSetAsDestination={onSetAsDestination}
          user={user}
        />
      )}
    </div>
  );
};

export default MapView;