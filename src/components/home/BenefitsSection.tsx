import { Zap, CircleCheckBig, Shield, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'

const ICONS = [
  <Zap className="w-12 h-12 text-primary" />,
  <CircleCheckBig className="w-12 h-12 text-primary" />,
  <Shield className="w-12 h-12 text-primary" />,
  <Clock className="w-12 h-12 text-primary" />,
]

export function BenefitsSection() {
  const { t } = useTranslation('home')
  const items = t('benefits.items', { returnObjects: true }) as {
    title: string
    description: string
  }[]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-start mb-12">
          <Heading
            level={1}
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            {t('benefits.title')}
          </Heading>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">{t('benefits.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">{ICONS[i]}</div>
              <Heading
                level={3}
                className="text-xl font-semibold mb-2"
              >
                {item.title}
              </Heading>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export { BenefitsSection as default }
