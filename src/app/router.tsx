import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ApplicationLayout } from '@/components/layout/ApplicationLayout'

const HomePage = lazy(() => import('@/routes/HomePage'))
const NotFoundPage = lazy(() => import('@/routes/NotFoundPage'))
const PlaceholderPage = lazy(() => import('@/routes/PlaceholderPage'))
const ApplicationYourInfoPage = lazy(() => import('@/routes/ApplicationYourInfoPage'))
const TripDetailsPage = lazy(() => import('@/routes/TripDetailsPage'))

function RouteFallback() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#0f2e49]" />
    </div>
  )
}

function SuspenseLayout() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Outlet />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    element: <SuspenseLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/application',
        element: <ApplicationLayout />,
        children: [
          { path: 'trip-details', element: <TripDetailsPage /> },
          { path: 'your-info', element: <ApplicationYourInfoPage /> },
        ],
      },
      { path: '/apply', element: <PlaceholderPage /> },
      { path: '/login', element: <PlaceholderPage /> },
      { path: '*', element: <NotFoundPage /> }
    ],
  },
])
