import { useNavigate } from 'react-router-dom'
import { ArrowRight, Upload, Clock, Briefcase } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'

const STEP_ICONS = [
  <Upload className="h-10 w-10 text-primary" />,
  <Clock className="h-10 w-10 text-primary" />,
  <Briefcase className="h-10 w-10 text-primary" />,
]

export function ApplicationProcess() {
  const { t } = useTranslation('home')
  const { t: tCommon } = useTranslation('common')
  const navigate = useNavigate()
  const steps = t('process.steps', { returnObjects: true }) as {
    title: string
    description: string
  }[]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <Heading
              level={1}
              className="text-3xl font-bold text-gray-800 mb-2"
            >
              {t('process.title')}
            </Heading>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">{t('process.subtitle')}</p>
            <div className="space-y-8 mb-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{STEP_ICONS[i]}</div>
                  <div>
                    <Heading level={3} className="text-xl font-semibold mb-1">
                      {step.title}
                    </Heading>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="h-6 w-6" />}
              onClick={() => navigate('/apply')}
            >
              {tCommon('buttons.applyNow')}
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/assets/images/home/traveler.png"
              alt="Traveler at airport"
              className="w-full rounded-lg"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export { ApplicationProcess as default }
