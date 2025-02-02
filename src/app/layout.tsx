import '@/assets/app.css'
import BottomNavigation from '@/components/layouts/BottomNavigation'
import Providers from '@/components/providers'
import { siteConfig } from '@/config/site'
import { auth } from '@/server/auth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const font = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await auth()
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <head>
        <link rel="theme-color" href="#2563EB" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body>
        <Providers session={session}>
          {children}
          <BottomNavigation />
        </Providers>
      </body>
    </html>
  )
}
