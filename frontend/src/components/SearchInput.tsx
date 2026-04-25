import { useState, useEffect, useRef } from 'react'
import { MapPin, X } from 'lucide-react'
import {type Suggestion, type PinnedStop} from '../lib/types'

const LOCATIONIQ_TOKEN = import.meta.env.VITE_LOCATIONIQ_TOKEN

 

interface SearchInputProps {
  value:               string
  onChange:            (e: React.ChangeEvent<HTMLInputElement>, locationData?: { lat: number; lng: number; fullAddress?: string }) => void
  placeholder:         string
  label:               string
  disableSuggestions?: boolean
  pinnedStop?:         PinnedStop | null
  onClearPin?:         () => void
}

const SearchInput = ({
  value,
  onChange,
  placeholder,
  label,
  disableSuggestions = false,
  pinnedStop  = null,
  onClearPin  = undefined,
}: SearchInputProps) => {
  const [suggestions,  setSuggestions]  = useState<Suggestion[]>([])
  const [isLoading,    setIsLoading]    = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [error,        setError]        = useState<string | null>(null)

  const dropdownRef     = useRef<HTMLDivElement>(null)
  const inputRef        = useRef<HTMLInputElement>(null)
  const justSelectedRef = useRef(false)

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current   && !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // debounce search
  useEffect(() => {
    if (disableSuggestions || pinnedStop) {
      setSuggestions([])
      setShowDropdown(false)
      setError(null)
      return
    }
    if (justSelectedRef.current) { justSelectedRef.current = false; return }
    if (value.length < 2) { setSuggestions([]); setShowDropdown(false); setError(null); return }

    const timer = setTimeout(() => searchLocations(value), 300)
    return () => clearTimeout(timer)
  }, [value, disableSuggestions, pinnedStop])

  const searchLocations = async (query: string) => {
    if (!LOCATIONIQ_TOKEN || LOCATIONIQ_TOKEN === 'undefined') {
      setError('Location search unavailable — missing API token.')
      setSuggestions([])
      setShowDropdown(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.locationiq.com/v1/autocomplete?` +
        `key=${LOCATIONIQ_TOKEN}` +
        `&q=${encodeURIComponent(query)}` +
        `&countrycodes=ae` +
        `&limit=10` +
        `&accept-language=en` +
        `&normalizecity=1`
      )

      if (!response.ok) {
        if (response.status === 401) throw new Error('Invalid API token')
        throw new Error('Search failed')
      }

      const data = await response.json()

      // filter to Dubai only
      const dubaiResults = data.filter((item: any) => {
        const name = item.display_name?.toLowerCase() || ''
        return name.includes('dubai')
      })

      const formatted: Suggestion[] = dubaiResults.map((item: any) => ({
        place_id:     item.place_id,
        display_name: item.display_name,
        name:         item.display_name.split(',')[0].trim(),
        lat:          parseFloat(item.lat),
        lng:          parseFloat(item.lon),
        type:         item.type || 'place',
      }))

      setSuggestions(formatted)
      setShowDropdown(formatted.length > 0)
    } catch (err: any) {
      setError(err.message === 'Invalid API token'
        ? 'Invalid LocationIQ token.'
        : 'Location search unavailable.'
      )
      setSuggestions([])
      setShowDropdown(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectSuggestion = (suggestion: Suggestion) => {
    justSelectedRef.current = true
    onChange(
      { target: { value: suggestion.name } } as React.ChangeEvent<HTMLInputElement>,
      { lat: suggestion.lat, lng: suggestion.lng, fullAddress: suggestion.display_name }
    )
    setShowDropdown(false)
    setSuggestions([])
    setError(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    if (!disableSuggestions && e.target.value.length >= 2) setShowDropdown(true)
    else if (e.target.value.length < 2) setShowDropdown(false)
  }

  return (
    <div className="flex flex-col gap-1.5 relative mb-3">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        {label}
      </label>

      <div className="relative">

        
        {pinnedStop ? (
          <div className="flex items-center gap-2 px-3.5 py-3 border-2 border-teal-500 rounded-lg bg-teal-500/8 min-h-[48px]">
            <MapPin size={13} className="text-teal-500 shrink-0" />
            <span className="flex-1 text-sm font-semibold text-gray-900 dark:text-white truncate">
              {pinnedStop.name.split(',')[0]}
            </span>
            <button
              onClick={onClearPin}
              className="w-5 h-5 rounded-full bg-teal-500/15 text-teal-500 flex items-center justify-center shrink-0 hover:bg-teal-500 hover:text-white transition-all"
            >
              <X size={12} />
            </button>
          </div>
        ) : (
          <>
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleInputChange}
              onFocus={() => {
                if (!disableSuggestions && !justSelectedRef.current && suggestions.length > 0) {
                  setShowDropdown(true)
                }
              }}
              autoComplete="off"
              className="w-full px-3.5 py-3 pr-11 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 outline-none transition-all focus:border-gray-900 dark:focus:border-white focus:shadow-[0_0_0_4px_rgba(10,22,40,0.06)]"
            />

            {/* loading spinner */}
            {isLoading && (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
              </div>
            )}

            {/* error tooltip */}
            {error && (
              <div className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white dark:bg-gray-800 text-red-500 px-3.5 py-2.5 rounded-lg text-[13px] font-medium border border-red-500/20 z-[1001]">
                {error}
              </div>
            )}

            {/* dropdown */}
            {showDropdown && suggestions.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg max-h-[260px] overflow-y-auto z-[1000]"
              >
                {suggestions.map((s, i) => {
                  const parts = s.display_name.split(',')
                  const main  = parts[0].trim()
                  const sub   = parts.slice(1, 3).join(',').trim()
                  return (
                    <div
                      key={`${s.place_id}-${i}`}
                      onClick={() => handleSelectSuggestion(s)}
                      className="flex items-start gap-3 px-3.5 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-b-0 transition-colors"
                    >
                      <span className="text-base shrink-0 mt-0.5 opacity-70">iconhere</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-gray-900 dark:text-white truncate">{main}</div>
                        <div className="text-xs text-gray-400 truncate">{sub || s.type}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* no results */}
            {showDropdown && !isLoading && !error && suggestions.length === 0 && value.length >= 2 && (
              <div
                ref={dropdownRef}
                className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-[1000]"
              >
                <div className="px-4 py-4 text-center text-[13px] text-gray-400">
                  No results found
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  )
}

export default SearchInput