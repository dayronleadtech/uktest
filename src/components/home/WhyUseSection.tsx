import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'

export default function WhyUseSection() {
  const { t } = useTranslation('home')
  const navigate = useNavigate()
  const applyingOwn = t('whyUse.applyingOwn.items', { returnObjects: true }) as string[]
  const withPortal = t('whyUse.withPortal.items', { returnObjects: true }) as {
    highlight: string
    text: string
  }[]

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-12">
          <Heading level={2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('whyUse.title')}
          </Heading>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t('whyUse.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <Heading 
              level={3} 
              useDefaultStyles={false}
              className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
              {t('whyUse.applyingOwn.title')}
            </Heading>
            <ul className="space-y-5">
              {applyingOwn.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">
                    <X className="w-3 h-3 text-gray-400" aria-hidden />
                  </span>
                  <span className="text-sm text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-primary-green bg-white shadow-lg shadow-green-100 p-8 flex flex-col">
            <Heading
              level={3}
              useDefaultStyles={false}
              className="text-xs font-semibold uppercase tracking-widest text-primary-green mb-6"
            >
              {t('whyUse.withPortal.title')}
            </Heading>
            <ul className="space-y-5 flex-1">
              {withPortal.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <Check className="w-3 h-3 text-primary-green" aria-hidden />
                  </span>
                  <span>
                    <span className="text-sm text-gray-700 leading-relaxed">
                      <strong className="font-semibold text-gray-900">{item.highlight}</strong>
                      {item.text ? ` ${item.text}` : ''}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={() => navigate('/application/trip-details')}
                className="w-full bg-primary-green text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer text-sm"
              >
                {t('whyUse.cta')}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">{t('whyUse.disclaimer')}</p>
            </div>
          </article>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">{t('whyUse.independentNotice')}</p>
      </div>
    </section>
  )
}
