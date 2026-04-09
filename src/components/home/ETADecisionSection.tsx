import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'

export function ETADecisionSection() {
  const { t } = useTranslation('home')
  const { t: tCommon } = useTranslation('common')
  const navigate = useNavigate()
  const approvalPoints = t('etaDecision.approval.points', {
    returnObjects: true,
  }) as string[]
  const rejectionPoints = t('etaDecision.rejection.points', {
    returnObjects: true,
  }) as string[]

  const cards = [
    {
      icon: <Check className="w-6 md:w-8 h-6 md:h-8 text-white" />,
      titleKey: 'etaDecision.approval.title',
      descKey: 'etaDecision.approval.description',
      points: approvalPoints,
      bgColor: 'bg-green-500',
    },
    {
      icon: <X className="w-6 md:w-8 h-6 md:h-8 text-white" />,
      titleKey: 'etaDecision.rejection.title',
      descKey: 'etaDecision.rejection.description',
      points: rejectionPoints,
      bgColor: 'bg-red-500',
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <Heading level={1} className="mb-4">
            {t('etaDecision.title')}
          </Heading>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('etaDecision.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`${card.bgColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  {card.icon}
                </div>
                <Heading
                  level={3}
                  className="text-xl md:text-2xl font-bold text-gray-900"
                >
                  {t(card.titleKey)}
                </Heading>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                {t(card.descKey)}
              </p>
              {card.points.length > 0 && (
                <ul className="space-y-3 mt-6">
                  {card.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-8 md:p-10 rounded-xl text-center">
          <Heading
            level={2}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-3"
          >
            {t('etaDecision.cta.title')}
          </Heading>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            {t('etaDecision.cta.description')}
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="h-5 w-5" />}
            onClick={() => navigate('/apply')}
          >
            {tCommon('buttons.applyNow')}
          </Button>
        </div>
      </div>
    </section>
  )
}
export { ETADecisionSection as default }
