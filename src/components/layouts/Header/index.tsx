import { Suspense } from 'react'
import { CheckAuth, CheckAuthLoader } from './CheckAuth'
import { Logo } from './Logo'
import { SearchField } from './SearchField'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-border border-b bg-card">
      <nav className="container flex items-center justify-between gap-4 px-4 py-2 lg:py-4">
        <Logo />
        <SearchField />
        <Suspense fallback={<CheckAuthLoader />}>
          <CheckAuth />
        </Suspense>
      </nav>
    </header>
  )
}
