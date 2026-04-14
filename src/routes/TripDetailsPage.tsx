import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Calendar, CalendarCheck, Plane, Plus, Minus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { CountrySelect } from '@/components/ui/CountrySelect'
import { ELIGIBLE_COUNTRIES } from '@/data/countries'
import { useUiStore } from '@/store/uiStore'

/** Default passport selection to match live reference (Spain). */
const SPAIN_COUNTRY_ID = 'cmfmdxfi7001012jll0ar6q8c'

const EXCLUDED_COUNTRIES = [
  'China',
  'India',
  'Ireland',
  'United Kingdom',
  'Lebanon',
  'Sri Lanka',
]

export default function TripDetailsPage() {
  const { t } = useTranslation('application')
  const selectedCountryId = useUiStore((s) => s.selectedCountryId)
  const setSelectedCountry = useUiStore((s) => s.setSelectedCountry)

  const [travellers, setTravellers] = useState(1)

  const countries = useMemo(
    () => ELIGIBLE_COUNTRIES.filter((c) => !EXCLUDED_COUNTRIES.includes(c.name)),
    [],
  )

  useEffect(() => {
    if (!selectedCountryId) {
      setSelectedCountry(SPAIN_COUNTRY_ID)
    }
  }, [selectedCountryId, setSelectedCountry])

  const selectedCountry = useMemo(
    () => countries.find((c) => c.id === selectedCountryId) ?? null,
    [countries, selectedCountryId],
  )

  const countryName = selectedCountry?.name ?? 'Spain'

  return (
    <div className="flex-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          {t('tripDetails.title')}
        </h1>
        <p className="text-base text-[#6c757d] mb-8 lg:mb-10 text-center lg:text-left max-w-4xl">
          {t('tripDetails.lead', { country: countryName })}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Info card — left */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8">
                <Heading level={2} className="text-lg sm:text-xl font-bold text-[#001a33] mb-6">
                  {t('tripDetails.infoCardTitle')}
                </Heading>
                <ul className="p-6 space-y-6">
                  <li className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden />
                    <p className="text-[#001a33] text-sm sm:text-base leading-relaxed font-medium">
                      {t('tripDetails.validity')}{' '}
                      <strong>{t('tripDetails.validityBold')}</strong>
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Plane className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden />
                    <p className="text-[#001a33] text-sm sm:text-base leading-relaxed font-medium">
                      {t('tripDetails.multipleVisits')}
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CalendarCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" aria-hidden />
                    <p className="text-[#001a33] text-sm sm:text-base leading-relaxed font-medium">
                      {t('tripDetails.stay')}
                    </p>
                  </li>
                </ul>
                <div className="pt-6 mt-2 border-t border-gray-200">
                  <p className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    {t('tripDetails.infoCardFooter')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form card — right */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('tripDetails.passportLabel')}
              </label>
              <CountrySelect
                countries={countries}
                selectedCountryId={selectedCountryId}
                onSelectCountry={setSelectedCountry}
                placeholder={t('tripDetails.passportLabel')}
                className="py-3 px-3 text-base border border-gray-300 rounded-lg"
              />

              <div className="mt-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('tripDetails.travellersLabel')}
                </label>
                <div className="flex items-stretch gap-0 max-w-xs border border-gray-300 rounded-lg overflow-hidden bg-white">
                  <button
                    type="button"
                    aria-label="Decrease travellers"
                    disabled={travellers <= 1}
                    onClick={() => setTravellers((n) => Math.max(1, n - 1))}
                    className={[
                      'px-4 py-3 text-xl font-medium transition-colors',
                      travellers <= 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                    ].join(' ')}
                  >
                    <Minus className="h-5 w-5 mx-auto" strokeWidth={2.5} />
                  </button>
                  <div className="flex-1 flex items-center justify-center min-w-[3rem] text-lg font-semibold text-[#001a33] border-x border-gray-300">
                    {travellers}
                  </div>
                  <button
                    type="button"
                    aria-label="Increase travellers"
                    onClick={() => setTravellers((n) => n + 1)}
                    className="px-4 py-3 bg-primary text-white hover:bg-primary-700 transition-colors"
                  >
                    <Plus className="h-5 w-5 mx-auto" strokeWidth={2.5} />
                  </button>
                </div>
                <p className="mt-2 text-sm text-[#6c757d]">{t('tripDetails.travellersHint')}</p>
              </div>

              <a
                href="https://uk.ukvisaportals.com/application?step=open"
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#005a30] hover:bg-[#004d28] text-white font-bold text-base py-4 px-6 transition-colors"
              >
                {t('tripDetails.beginApplication')}
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
