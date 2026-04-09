import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'
import { scheduleThirdPartyIntegrations } from '@/integrations/thirdParty'

export default function App() {
  useEffect(() => {
    scheduleThirdPartyIntegrations()
  }, [])

  return <RouterProvider router={router} />
}
