import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Language, DEFAULT_LANGUAGE } from '@/data/languages'
import { DEFAULT_CURRENCY } from '@/data/currencies'

type UiState = {
  mobileNavOpen: boolean
  selectedCountryId: string | null
  currentLanguage: Language
  selectedCurrency: string
  setMobileNavOpen: (open: boolean) => void
  toggleMobileNav: () => void
  setSelectedCountry: (id: string) => void
  setCurrentLanguage: (lang: Language) => void
  setSelectedCurrency: (currency: string) => void
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      mobileNavOpen: false,
      selectedCountryId: null,
      currentLanguage: DEFAULT_LANGUAGE,
      selectedCurrency: DEFAULT_CURRENCY,
      setMobileNavOpen: (open) => set({ mobileNavOpen: open }),
      toggleMobileNav: () =>
        set((s) => ({ mobileNavOpen: !s.mobileNavOpen })),
      setSelectedCountry: (id) => set({ selectedCountryId: id }),
      setCurrentLanguage: (lang) => set({ currentLanguage: lang }),
      setSelectedCurrency: (currency) => set({ selectedCurrency: currency }),
    }),
    {
      name: 'uketa-ui',
      partialize: (s) => ({
        selectedCountryId: s.selectedCountryId,
        currentLanguage: s.currentLanguage,
        selectedCurrency: s.selectedCurrency,
      }),
    },
  ),
)
