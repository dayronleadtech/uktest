import { Link } from 'react-router-dom'
import { MarketingLayout } from '@/components/layout/MarketingLayout'

export default function NotFoundPage() {
  return (
    <MarketingLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl text-gray-600">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors mt-4"
        >
          ← Back to Home
        </Link>
      </div>
    </MarketingLayout>
  )
}
