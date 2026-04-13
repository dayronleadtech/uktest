import { useNavigate } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, RefreshCw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'

const ICONS = [
  <Calendar className="w-12 h-12 text-primary" />,
  <Clock className="w-12 h-12 text-primary" />,
  <RefreshCw className="w-12 h-12 text-primary" />,
]

export function ETAValiditySection() {
  const { t } = useTranslation('home')
  const { t: tCommon } = useTranslation('common')
  const navigate = useNavigate()
  const items = t('etaValidity.items', { returnObjects: true }) as {
    title: string
    description: string
  }[]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4">
            {t('etaValidity.title')}
          </Heading>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {t('etaValidity.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 rounded-lg text-center shadow-sm"
            >
              <div className="flex justify-center mb-4">{ICONS[i]}</div>
              <Heading
                level={3}
                className="text-xl font-semibold mb-3 text-gray-800"
              >
                {item.title}
              </Heading>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="h-6 w-6" />}
            onClick={() => navigate('/application/trip-details')}
            className="px-12 py-4"
          >
            {tCommon('buttons.applyNow')}
          </Button>
        </div>
      </div>
    </section>
  )
}
export { ETAValiditySection as default }
