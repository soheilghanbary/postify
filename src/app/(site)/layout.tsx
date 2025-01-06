import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import type { PropsWithChildren } from 'react'

export default function siteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="container mx-auto min-h-screen p-4">{children}</div>
      <Footer />
    </>
  )
}
