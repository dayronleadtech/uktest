import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { ELIGIBLE_COUNTRIES, getFlagEmoji } from '@/data/countries'
import { useUiStore } from '@/store/uiStore'
import { PassportSelectorWidget } from '@/components/home/HeroSection'

const EXCLUDED_NAMES = ['China', 'India', 'Ireland', 'United Kingdom', 'Lebanon', 'Sri Lanka']

export default function EligibleCountries() {
  const { t } = useTranslation('home')
  const navigate = useNavigate()
  const setSelectedCountry = useUiStore((s) => s.setSelectedCountry)

  const sorted = useMemo(
    () =>
      ELIGIBLE_COUNTRIES.filter((c) => !EXCLUDED_NAMES.includes(c.name)).sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    [],
  )

  function handleSelect(id: string) {
    setSelectedCountry(id)
    navigate('/application/trip-details')
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-8">
          <Heading level={1} className="text-3xl font-bold text-gray-800 mb-4">
            {t('eligibleCountries.title')}
          </Heading>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">{t('eligibleCountries.subtitle')}</p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-2">{t('eligibleCountries.description')}</p>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 font-medium">
            {t('eligibleCountries.checkEligibility')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {sorted.map((country) => (
            <div
              key={country.id}
              onClick={() => handleSelect(country.id)}
              className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 flex items-center gap-3 hover:border-primary hover:shadow-sm transition-all duration-200 cursor-pointer"
            >
              <div className="text-2xl md:text-3xl flex-shrink-0">
                {getFlagEmoji(country.code)}
              </div>
              <span className="text-sm md:text-base text-gray-700 font-medium truncate">
                {country.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <PassportSelectorWidget centered showLabel />
        </div>
      </div>
    </section>
  )
}
