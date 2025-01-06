import {
  AddCircleHalfDotIcon,
  Fire03Icon,
  Home01Icon,
  Notification02Icon,
  User03Icon,
} from '@/components/common/icons'
import { Logo } from '@/components/layouts/Header/Logo'
import { SidebarLink } from './SidebarLink'

export const Sidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 bg-card p-2 md:inline-block">
      <header className="p-4">
        <Logo />
      </header>
      <div className="flex flex-col gap-1">
        <SidebarLink href="/home" label="Home" icon={Home01Icon} />
        <SidebarLink href="/trends" label="Trends Posts" icon={Fire03Icon} />
        <SidebarLink
          href="/new"
          label="Create Post"
          icon={AddCircleHalfDotIcon}
        />
        <SidebarLink
          href="/notifications"
          label="Notifications"
          icon={Notification02Icon}
        />
        <SidebarLink href="/profile" label="Profile" icon={User03Icon} />
      </div>
    </aside>
  )
}
