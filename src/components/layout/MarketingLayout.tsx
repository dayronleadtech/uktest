import { type ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type MarketingLayoutProps = {
  children: ReactNode
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow mx-auto w-full min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}
