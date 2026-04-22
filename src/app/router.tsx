import { lazy, Suspense } from 'react'
import { Navigate, createBrowserRouter, Outlet } from 'react-router-dom'
import { ApplicationLayout } from '@/components/layout/ApplicationLayout'

const HomePage = lazy(() => import('@/routes/HomePage'))
const NotFoundPage = lazy(() => import('@/routes/NotFoundPage'))
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
      { path: '/404', element: <NotFoundPage /> },
      {
        path: '/application',
        element: <ApplicationLayout />,
        children: [
          { index: true, element: <Navigate to="/404" replace /> },
          { path: 'trip-details', element: <TripDetailsPage /> }
        ],
      },
      { path: '*', element: <NotFoundPage /> }
    ],
  },
])
