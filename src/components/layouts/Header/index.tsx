import {
  AddCircleHalfDotIcon,
  Fire03Icon,
  Home01Icon,
  Notification02Icon,
  Search01Icon,
  User03Icon,
} from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { CheckAuth } from './CheckAuth'
import { SearchFieldModal } from './SearchField'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-border border-b bg-card">
      <nav className="container flex items-center justify-between gap-4 px-4 py-2 lg:py-4">
        <Logo />
        <div className="hidden items-center md:flex">
          <NavLink href="/home" icon={Home01Icon} label="Home" />
          <NavLink href="/trends" icon={Fire03Icon} label="Trends" />
          <SearchFieldModal />
          <NavLink href="/new" icon={AddCircleHalfDotIcon} label="Submit" />
          <NavLink
            href="/activity"
            icon={Notification02Icon}
            label="Activity"
          />
        </div>
        <CheckAuth />
      </nav>
    </header>
  )
}
