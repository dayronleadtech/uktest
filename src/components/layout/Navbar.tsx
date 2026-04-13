import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, LogIn } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useUiStore } from '@/store/uiStore'
import logo from '/assets/images/logo.webp'

export function Navbar() {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const mobileNavOpen = useUiStore((s) => s.mobileNavOpen)
  const toggleMobileNav = useUiStore((s) => s.toggleMobileNav)
  const setMobileNavOpen = useUiStore((s) => s.setMobileNavOpen)

  const isOnApplication = pathname.includes('/application')

  function go(path: string) {
    setMobileNavOpen(false)
    navigate(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-primary min-h-[112px] flex items-center">
      {/* Desktop + mobile top bar — 5-column grid */}
      <div className="grid grid-cols-5 py-4 px-6 sm:px-6 md:px-12 flex items-center max-w-7xl mx-auto">
        {/* Col 1: Logo */}
        <div className="flex flex-col items-start justify-center min-w-0 w-[500px]">
          <Link
            to="/"
            onClick={() => setMobileNavOpen(false)}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="UK Visa Portal"
              className="w-auto"
              width="500"
              height="79"
            />
          </Link>
        </div>

        {/* Cols 2-4 (mobile): centered apply button */}
        <div className="lg:hidden flex-1 col-span-3 flex justify-center mx-4">
          {!isOnApplication && (
            <button
              onClick={() => go('/application/trip-details')}
              className="bg-white text-primary px-2 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              {t('buttons.applyNow')}
            </button>
          )}
        </div>

        {/* Col 5 (mobile): hamburger */}
        <div className="lg:hidden col-span-1 flex justify-end">
          <button
            type="button"
            className="p-2 text-white hover:text-white/90 transition-colors"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            onClick={toggleMobileNav}
          >
            {mobileNavOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {/* Cols 2-5 (desktop): nav links + actions */}
        <div className="hidden col-span-4 lg:flex items-center space-x-8 ml-auto">
          <div className="flex items-center space-x-8">
              {!isOnApplication && (
                <button
                  onClick={() => go('/application/trip-details')}
                  className="bg-white text-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-50 hover:px-6 transition-all duration-300 ease-in-out"
                >
                  {t('buttons.applyNow')}
                </button>
              )}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileNavOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="px-4 py-2 space-y-2">
            <div className="py-2">
              <button
                onClick={() => go('/login')}
                className="border border-gray-300 rounded-md px-4 py-2 hover:bg-primary-600 transition-colors cursor-pointer w-full text-left flex items-center text-gray-700"
              >
                <LogIn className="h-4 w-4 mr-2" />
                {t('navigation.login')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
