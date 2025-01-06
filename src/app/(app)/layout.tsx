import { Sidebar } from '@/components/(app)/Sidebar'
import { ModeToggle } from '@/components/common/mode-toggle'
import { TopUsers } from '@/components/features/UserList'
import { SocialIcons } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { SearchField } from '@/components/layouts/Header/SearchField'
import { Separator } from '@/components/ui/separator'
import type { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="container flex p-0">
        <Sidebar />
        <main className="flex-1 md:border-x">
          <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b bg-card/85 p-4 backdrop-blur">
            <SearchField />
          </header>
          <section className="min-h-screen">{children}</section>
        </main>
        <div className="mt-4 hidden h-fit w-80 gap-2 lg:grid">
          <TopUsers />
          <Separator />
          <div className="flex flex-col gap-4 p-4 text-foreground/75 text-xs">
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
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  )
}
