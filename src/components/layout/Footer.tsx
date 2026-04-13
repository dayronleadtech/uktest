import { Link, useNavigate } from 'react-router-dom'
import { MapPin, ChevronRight, Globe, CircleHelp, Mail, DollarSign } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Heading } from '@/components/ui/Heading'

export function Footer() {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const paragraphs = t('footer.importantDisclaimer.paragraphs', {
    returnObjects: true,
  }) as string[]

  const supportLinks = [
    { key: 'footer.supportLinks.helpCenter', href: '/help-center', Icon: CircleHelp },
    { key: 'footer.supportLinks.contactSupport', href: 'mailto:contact@ukvisaportal.com', Icon: Mail },
    { key: 'footer.supportLinks.refundPolicy', href: null, Icon: DollarSign, onClick: () => navigate('/refund-policy') },
  ]

  const locationLinks = [
    { icon: MapPin, i18nKey: 'footer.company.location', href: '#' },
  ]

  return (
    <footer className="bg-primary-700 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <Heading level={3} className="mb-4 text-white">
              {t('footer.company.name')}
            </Heading>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t('footer.company.description')}
            </p>
            <div className="flex items-center gap-2 text-gray-300 mt-2">
              <Globe className="w-4 h-4" />
              <p>{t('footer.company.since')}</p>
            </div>
            <div className="mt-4 space-y-3">
              {locationLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <item.icon className="w-4 h-4 text-primary-500" />
                  <p>{t(item.i18nKey)}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <Heading level={4} className="mb-4 text-white">
              {t('footer.sections.support')}
            </Heading>
            <ul className="space-y-2">
              {supportLinks.map((item) => (
                <li key={item.key}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition group"
                    >
                      <item.Icon className="w-4 h-4 text-primary-500" />
                      <span>{t(item.key)}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  ) : (
                    <button
                      onClick={item.onClick}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition group"
                    >
                      <item.Icon className="w-4 h-4 text-primary-500" />
                      <span>{t(item.key)}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column to keep both visible columns at one-third width */}
          <div className="hidden md:block" aria-hidden />
        </div>
      </div>

      {/* Disclaimer */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Heading level={4} className="text-white mb-4">
            {t('footer.importantDisclaimer.title')}
          </Heading>
          <div className="space-y-3">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-gray-600 leading-relaxed !text-gray-300 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2f5f6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2 md:gap-4">
            <p className="text-gray-300 text-xs">{t('footer.bottom.copyright')}</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-1 text-xs text-gray-200">
              <Link
                to="/terms-conditions"
                className="hover:text-white transition px-2 py-1"
              >
                {t('footer.legalLinks.termsOfService')}
              </Link>
              <span className="text-gray-200 py-1">|</span>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition px-2 py-1"
              >
                {t('footer.legalLinks.privacyPolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
