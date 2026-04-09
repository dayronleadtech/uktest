import { useState, useEffect } from 'react'
import { X, Globe, DollarSign, ChevronDown } from 'lucide-react'
import i18n from '@/lib/i18n'
import { LANGUAGES, flagEmoji, type Language } from '@/data/languages'
import { CURRENCIES } from '@/data/currencies'
import { useUiStore } from '@/store/uiStore'

type PreferencesModalProps = {
  isOpen: boolean
  onClose: () => void
}

function PreferencesModal({ isOpen, onClose }: PreferencesModalProps) {
  const currentLanguage = useUiStore((s) => s.currentLanguage)
  const selectedCurrency = useUiStore((s) => s.selectedCurrency)
  const setCurrentLanguage = useUiStore((s) => s.setCurrentLanguage)
  const setSelectedCurrency = useUiStore((s) => s.setSelectedCurrency)

  const [langCode, setLangCode] = useState(currentLanguage.code)
  const [currency, setCurrency] = useState(selectedCurrency)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setLangCode(currentLanguage.code)
      setCurrency(selectedCurrency)
    }
  }, [isOpen, currentLanguage.code, selectedCurrency])

  async function handleUpdate() {
    setLoading(true)
    try {
      const lang = LANGUAGES.find((l) => l.code === langCode)
      if (lang && lang.code !== currentLanguage.code) {
        setCurrentLanguage(lang)
        await i18n.changeLanguage(lang.code)
      }
      if (currency !== selectedCurrency) {
        setSelectedCurrency(currency)
      }
    } finally {
      setLoading(false)
      onClose()
    }
  }

  function handleClose() {
    setLangCode(currentLanguage.code)
    setCurrency(selectedCurrency)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 w-full flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Preferences</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Language */}
          <div>
            <div className="flex items-center mb-3">
              <Globe className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Language</h3>
            </div>
            <div className="relative">
              <select
                value={langCode}
                onChange={(e) => setLangCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Currency */}
          <div>
            <div className="flex items-center mb-3">
              <DollarSign className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Currency</h3>
            </div>
            <div className="relative">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary appearance-none outline-none"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.symbol} {c.code} - {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-6 border-t border-gray-200">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className={[
              'w-full inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 bg-gradient-to-br from-primary-green to-primary-green-100 text-white text-sm md:text-base px-4 py-3',
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-primary-green-100 hover:to-primary-green-200',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            Update Preferences
          </button>
        </div>
      </div>
    </div>
  )
}

type LanguageCurrencySelectorProps = {
  className?: string
}

export function LanguageCurrencySelector({
  className = '',
}: LanguageCurrencySelectorProps) {
  const currentLanguage = useUiStore((s) => s.currentLanguage)
  const selectedCurrency = useUiStore((s) => s.selectedCurrency)
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open language and currency preferences"
        className={`flex items-center space-x-1 text-sm transition-colors ${className}`}
      >
        <span className="text-xl">{flagEmoji(currentLanguage.flagCode)}</span>
        <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
        <span className="text-gray-200">|</span>
        <span className="font-medium">{selectedCurrency}</span>
      </button>
      <PreferencesModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

// Re-export Language type for convenience
export type { Language }
