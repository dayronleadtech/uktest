import { useState, useRef, useEffect, useMemo } from 'react'
import { ChevronDown, Search, Check } from 'lucide-react'

export type Country = {
  id: string
  code: string
  name: string
}

type CountrySelectProps = {
  countries: Country[]
  selectedCountryId: string | null
  onSelectCountry: (id: string) => void
  placeholder?: string
  className?: string
  errorMessage?: string
}

function flagEmoji(code: string): string {
  if (!code || code.length !== 2) return ''
  const points = code
    .toUpperCase()
    .split('')
    .map((c) => 127397 + c.charCodeAt(0))
  return String.fromCodePoint(...points)
}

function normalize(str: string): string {
  return (str ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
}

export function CountrySelect({
  countries,
  selectedCountryId,
  onSelectCountry,
  placeholder = 'Select your country',
  className = '',
  errorMessage,
}: CountrySelectProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const selected = useMemo(
    () => countries.find((c) => c.id === selectedCountryId) ?? null,
    [countries, selectedCountryId],
  )

  const filtered = useMemo(() => {
    const q = normalize(search)
    if (!q) return countries
    return countries.filter((c) => normalize(c.name).includes(q))
  }, [countries, search])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    if (open && searchRef.current) searchRef.current.focus()
  }, [open])

  function toggle() {
    setOpen((v) => {
      if (v) return false
      setSearch('')
      return true
    })
  }

  function select(id: string) {
    onSelectCountry(id)
    setOpen(false)
    setSearch('')
  }

  return (
    <div className="relative flex-1" ref={containerRef}>
      <button
        type="button"
        translate="no"
        onClick={toggle}
        className={[
          'w-full flex items-center justify-between bg-white border border-gray-300 rounded-md px-3 py-2 text-left focus:outline-none',
          errorMessage ? 'border-red-300' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {selected ? (
          <span
            translate="no"
            className="flex items-center notranslate"
          >
            <span className="text-2xl mr-2">{flagEmoji(selected.code)}</span>
            <span className="text-gray-700">{selected.name}</span>
          </span>
        ) : (
          <span className="block text-gray-500">{placeholder}</span>
        )}
        <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0 ml-2" />
      </button>

      {errorMessage && (
        <p className="text-sm text-red-600 mt-1">{errorMessage}</p>
      )}

      {open && (
        <div className="absolute z-[60] mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full text-black pl-7 pr-3 py-2 border-none text-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filtered.length > 0 ? (
              filtered.map((c) => {
                const isSelected = c.id === selected?.id
                return (
                  <button
                    key={c.id}
                    type="button"
                    translate="no"
                    onClick={() => select(c.id)}
                    className={[
                      'w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center justify-between transition-colors notranslate',
                      isSelected ? 'bg-blue-50 hover:bg-blue-100' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <span className="flex items-center">
                      <span className="text-2xl mr-2 flex-shrink-0">
                        {flagEmoji(c.code)}
                      </span>
                      <span
                        className={`text-gray-700 ${isSelected ? 'font-medium text-primary' : ''}`}
                      >
                        {c.name}
                      </span>
                    </span>
                    {isSelected && (
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                  </button>
                )
              })
            ) : (
              <div className="px-3 py-4 text-center text-gray-500 text-sm">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
