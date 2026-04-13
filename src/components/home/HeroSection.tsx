import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { CountrySelect } from '@/components/ui/CountrySelect'
import { ELIGIBLE_COUNTRIES } from '@/data/countries'
import { useUiStore } from '@/store/uiStore'

const EXCLUDED_COUNTRIES = [
  'China',
  'India',
  'Ireland',
  'United Kingdom',
  'Lebanon',
  'Sri Lanka',
]

export function PassportSelectorWidget({
  centered = true,
  showLabel = true,
}: {
  centered?: boolean
  showLabel?: boolean
}) {
  const { t } = useTranslation('home')
  const { t: tCommon } = useTranslation('common')
  const navigate = useNavigate()
  const selectedCountryId = useUiStore((s) => s.selectedCountryId)
  const setSelectedCountry = useUiStore((s) => s.setSelectedCountry)

  const countries = ELIGIBLE_COUNTRIES.filter(
    (c) => !EXCLUDED_COUNTRIES.includes(c.name),
  )

  function handleApply() {
    navigate('/application/trip-details')
  }

  return (
    <div className={centered ? 'max-w-2xl mx-auto' : 'w-full'}>
      <div className="bg-[#E7EEEF52] rounded-lg p-6 lg:p-8">
        {showLabel && (
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-left text-lg font-medium text-gray-800 mb-4">
            {t('hero.myPassport')}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <CountrySelect
              countries={countries}
              selectedCountryId={selectedCountryId}
              onSelectCountry={setSelectedCountry}
              placeholder={t('hero.selectCountry')}
              className="py-4 px-4 text-lg w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-primary-green"
            />
          </div>
          <Button
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="h-6 w-6" />}
            iconPosition="right"
            onClick={handleApply}
            className="px-8 py-4"
          >
            {tCommon('buttons.applyNow')}
          </Button>
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">{t('hero.disclaimer')}</p>
      </div>
    </div>
  )
}

export function HeroSection() {
  const { t } = useTranslation('home')

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:pt-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <Heading level={1} className="text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
          <strong>{t('hero.title')}</strong>
        </Heading>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed lg:text-xl mb-6">
          {t('hero.subtitle')}
        </p>
        <PassportSelectorWidget />
      </div>
    </section>
  )
}
