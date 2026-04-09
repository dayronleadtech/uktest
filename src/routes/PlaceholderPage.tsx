import { Link, useLocation } from 'react-router-dom'
import { MarketingLayout } from '@/components/layout/MarketingLayout'

export default function PlaceholderPage() {
  const { pathname } = useLocation()

  return (
    <MarketingLayout>
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Coming soon</h1>
        <p className="text-gray-600 mb-6">
          Route <code className="bg-gray-100 px-2 py-1 rounded text-sm">{pathname}</code> — application wizard, auth, or account screens per project plan.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </section>
    </MarketingLayout>
  )
}
