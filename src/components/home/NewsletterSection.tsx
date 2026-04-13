import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { CountrySelect } from '@/components/ui/CountrySelect'
import { Button } from '@/components/ui/Button'
import { ELIGIBLE_COUNTRIES } from '@/data/countries'
import { useUiStore } from '@/store/uiStore'

export function NewsletterSection() {
  const { t: tHome } = useTranslation('home')
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const selectedCountryId = useUiStore((s) => s.selectedCountryId)
  const setSelectedCountry = useUiStore((s) => s.setSelectedCountry)

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">
        <div className="bg-[#0f2e49] rounded-lg p-8 md:p-12">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center xl:gap-36 gap-4">
            <div className="lg:w-1/2">
              <Heading level={1} className="text-xl lg:text-2xl font-bold mb-2 text-white">
                {tHome('newsletter.title')}
              </Heading>
            </div>
            <div className="lg:w-1/2 w-full">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-sm mb-2 text-white">{tHome('newsletter.whereAmI')}</p>
              <div className="flex flex-wrap gap-2">
                <CountrySelect
                  countries={ELIGIBLE_COUNTRIES}
                  selectedCountryId={selectedCountryId}
                  onSelectCountry={setSelectedCountry}
                  placeholder={tHome('hero.selectCountry')}
                  className="py-3"
                />
                <div className="hidden md:flex">
                  <Button
                    variant="outline"
                    size="md"
                    icon={<ArrowRight className="h-6 w-6" />}
                    iconPosition="right"
                    onClick={() => navigate('/application/trip-details')}
                  >
                    {t('buttons.applyNow')}
                  </Button>
                </div>
                <div className="flex md:hidden w-full">
                  <button
                    onClick={() => navigate('/application/trip-details')}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors w-full sm:w-auto"
                  >
                    <span className="hidden sm:inline">APPLY NOW</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export { NewsletterSection as default }
