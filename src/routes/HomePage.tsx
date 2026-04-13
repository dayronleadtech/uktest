import { Suspense, lazy } from 'react'
import { MarketingLayout } from '@/components/layout/MarketingLayout'
import { HeroSection } from '@/components/home/HeroSection'

const BenefitsSection = lazy(() => import('@/components/home/BenefitsSection'))
const WhyUseSection = lazy(() => import('@/components/home/WhyUseSection'))
const ApplicationProcess = lazy(() => import('@/components/home/ApplicationProcess'))
const EligibleCountries = lazy(() => import('@/components/home/EligibleCountries'))
const ETAValiditySection = lazy(() => import('@/components/home/ETAValiditySection'))
const ETARequirementsSection = lazy(
  () => import('@/components/home/ETARequirementsSection'),
)
const ETADecisionSection = lazy(() => import('@/components/home/ETADecisionSection'))
const CustomerReviews = lazy(() => import('@/components/home/CustomerReviews'))
const NewsletterSection = lazy(() => import('@/components/home/NewsletterSection'))

export default function HomePage() {
  return (
    <MarketingLayout>
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <Suspense fallback={null}>
          <BenefitsSection />
          <WhyUseSection />
          <ApplicationProcess />
          <EligibleCountries />
          <ETAValiditySection />
          <ETARequirementsSection />
          <ETADecisionSection />
          <CustomerReviews />
          <NewsletterSection />
        </Suspense>
      </div>
    </MarketingLayout>
  )
}
