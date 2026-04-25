export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || '/api',
  TIMEOUT: 10000,
} as const;

export const MAP_CONFIG = {
  DEFAULT_CENTER: { lat: 25.2048, lng: 55.2708 },
  DEFAULT_ZOOM:   11,
  MIN_ZOOM:       10,
  MAX_ZOOM:       18,
  TILE_LAYER:     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION:    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
} as const;

export const ICON_COLORS = {
  ORIGIN:        '#4CAF50',
  DESTINATION:   '#F44336',
  BUS_STOP:      '#2196F3',
  USER_LOCATION: '#9C27B0',
  BUS:           '#FF5722',
  ROUTE:         '#667eea',
} as const;

export const ROUTE_TYPES = {
  EXPRESS:  'express',
  LOCAL:    'local',
  NIGHT:    'night',
  CIRCULAR: 'circular',
} as const;

export const ROUTE_TYPE_COLORS: Record<string, string> = {
  express:  '#FF5722',
  local:    '#4CAF50',
  night:    '#9C27B0',
  circular: '#2196F3',
};

export const SEARCH_CONFIG = {
  DEBOUNCE_DELAY:    300,
  MIN_SEARCH_LENGTH: 2,
  MAX_RESULTS:       10,
} as const;

export const STORAGE_KEYS = {
  FAVORITES:        'sbr_favorites',
  RECENT_SEARCHES:  'sbr_recent_searches',
  USER_PREFERENCES: 'sbr_preferences',
} as const;

export const ERROR_MESSAGES = {
  NO_ROUTE_FOUND: 'No direct route found between these stops',
  NETWORK_ERROR:  'Unable to connect to server. Please check your connection.',
  LOCATION_ERROR: 'Unable to get your location. Please enable location services.',
  INVALID_STOP:   'Invalid bus stop selected',
} as const;

export const SUCCESS_MESSAGES = {
  ROUTE_FOUND:       'Route found successfully!',
  FAVORITE_ADDED:    'Added to favorites',
  FAVORITE_REMOVED:  'Removed from favorites',
} as const;