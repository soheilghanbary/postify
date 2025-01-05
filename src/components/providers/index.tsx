'use client'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import type { PropsWithChildren } from 'react'
import { QueryProvider } from './query-provider'
import { ToastProvider } from './toast-provider'

type Props = PropsWithChildren & {
  session?: Session | null
}

export default function Providers({ session, children }: Props) {
  return (
    <SessionProvider session={session}>
      <NuqsAdapter>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            enableColorScheme
            defaultTheme="light"
          >
            {children}
            <ToastProvider />
          </ThemeProvider>
        </QueryProvider>
      </NuqsAdapter>
    </SessionProvider>
  )
}
