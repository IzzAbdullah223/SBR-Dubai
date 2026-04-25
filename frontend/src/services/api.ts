const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const getToken = () => localStorage.getItem('token')

const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
})

//  response helpers 

const handleResponse = async (res: Response) => {
  const data = await res.json()
  if (!res.ok) throw new Error(data.message || 'Something went wrong')
  return data
}

//  auth 
export const authAPI = {
  login: async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ email, password }),
    })
    return handleResponse(res)
  },

  signup: async (name: string, email: string, password: string, phone?: string) => {
    const res = await fetch(`${BASE_URL}/api/auth/signup`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ name, email, password, phone }),
    })
    return handleResponse(res)
  },

  getProfile: async () => {
    const res = await fetch(`${BASE_URL}/api/settings/profile`, {
      headers: authHeaders(),
    })
    return handleResponse(res)
  },
}


export const topsisAPI = {
  findBuses: async (
    origin: { lat: number; lng: number },
    destination: { lat: number; lng: number },
    optimizationMode = 'fastest'
  ) => {
    const res = await fetch(`${BASE_URL}/api/find-buses`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ origin, destination, optimizationMode }),
    })
    return handleResponse(res)
  },
}


export const shapeAPI = {
  getById: async (lineId: string, originStopId?: string, destStopId?: string) => {
    const params = new URLSearchParams()
    if (originStopId) params.append('originStopId', originStopId)
    if (destStopId)   params.append('destStopId', destStopId)
    const res = await fetch(`${BASE_URL}/api/shapes/${lineId}?${params.toString()}`)
    return handleResponse(res)
  },
}



export const savedRoutesAPI = {
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/api/saved-routes`, {
      headers: authHeaders(),
    })
    return handleResponse(res)
  },

  create: async (payload: {
    routeName:   string
    originName:  string
    originLat:   number
    originLng:   number
    destName:    string
    destLat:     number
    destLng:     number
  }) => {
    const res = await fetch(`${BASE_URL}/api/saved-routes`, {
      method:  'POST',
      headers: authHeaders(),
      body:    JSON.stringify(payload),
    })
    return handleResponse(res)
  },

  delete: async (id: number) => {
    const res = await fetch(`${BASE_URL}/api/saved-routes/${id}`, {
      method:  'DELETE',
      headers: authHeaders(),
    })
    return handleResponse(res)
  },
}


export const busStopsAPI = {
  getById: async (stopId: string) => {
    const res = await fetch(`${BASE_URL}/api/bus-stops/${stopId}`)
    return handleResponse(res)
  },
}

export const settingsAPI = {
  getFavoriteStops: async () => {
    const res = await fetch(`${BASE_URL}/api/settings/favorite-stops`, {
      headers: authHeaders(),
    })
    return handleResponse(res)
  },

  addFavoriteStop: async (stop: {
    stopId: string
    name:   string
    lat:    number
    lng:    number
  }) => {
    const res = await fetch(`${BASE_URL}/api/settings/favorite-stops`, {
      method:  'POST',
      headers: authHeaders(),
      body:    JSON.stringify(stop),
    })
    return handleResponse(res)
  },

  removeFavoriteStop: async (stopId: string) => {
    const res = await fetch(`${BASE_URL}/api/settings/favorite-stops/${stopId}`, {
      method:  'DELETE',
      headers: authHeaders(),
    })
    return handleResponse(res)
  },

updatePreferences: async (optimizationMode: string) => {
  const res = await fetch(`${BASE_URL}/api/settings/preferences`, {
    method:  'PATCH',
    headers: authHeaders(),
    body:    JSON.stringify({ optimizationMode }),
  })
  return handleResponse(res)
},
  
}

export const walletAPI = {
  getWallet: async () => {
    const res = await fetch(`${BASE_URL}/api/wallet`, {
      headers: authHeaders(),
    })
    return handleResponse(res)
  },

  recharge: async (amount: number) => {
    const res = await fetch(`${BASE_URL}/api/wallet/recharge`, {
      method:  'POST',
      headers: authHeaders(),
      body:    JSON.stringify({ amount }),
    })
    return handleResponse(res)
  },
}









