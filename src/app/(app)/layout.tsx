import { TopUsers } from '@/components/features/UserList'
import { SocialIcons } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import type { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="container flex p-0">
        <main className="min-h-screen flex-1 p-4">{children}</main>
        <div className="mt-4 hidden h-fit w-80 gap-2 lg:grid">
          <TopUsers />
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 text-foreground/75 text-xs">
            <p>
              Developed by{' '}
              <a
                href="https://soheilghanbary.ir/en"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline decoration-wavy underline-offset-4"
              >
                Soheil Ghanbary
              </a>
            </p>
            <p>All rights reserved © 2025</p>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  )
}
