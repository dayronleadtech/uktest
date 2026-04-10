import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'

export function ApplicationLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
      <Navbar />
      <Outlet />
    </div>
  )
}
