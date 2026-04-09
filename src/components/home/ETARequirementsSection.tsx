import { BookOpen, Camera, CreditCard, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'

const ICONS = [
  <BookOpen className="w-12 h-12 text-primary" />,
  <Camera className="w-12 h-12 text-primary" />,
  <CreditCard className="w-12 h-12 text-primary" />,
  <Mail className="w-12 h-12 text-primary" />,
]

export function ETARequirementsSection() {
  const { t } = useTranslation('home')
  const items = t('etaRequirements.items', { returnObjects: true }) as {
    title: string
    description: string
  }[]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4">
            {t('etaRequirements.title')}
          </Heading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 md:p-8 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">{ICONS[i]}</div>
              <Heading level={3} className="mb-3">
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
export { ETARequirementsSection as default }
