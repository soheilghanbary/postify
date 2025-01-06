import {
  AddCircleHalfDotIcon,
  Fire03Icon,
  Home01Icon,
  Notification02Icon,
  User03Icon,
} from '@/components/common/icons'
import { Logo } from '@/components/layouts/Header/Logo'
import { SidebarLink } from './SidebarLink'

type Props = {
  onLinkClick?: () => void
}

export const SidebarContent = ({ onLinkClick }: Props) => {
  return (
    <>
      <header className="p-4">
        <Logo />
      </header>
      <div className="flex flex-col gap-1">
        <SidebarLink
          href="/home"
          label="Home"
          icon={Home01Icon}
          onClick={onLinkClick}
        />
        <SidebarLink
          href="/trends"
          label="Trends Posts"
          icon={Fire03Icon}
          onClick={onLinkClick}
        />
        <SidebarLink
          href="/new"
          label="Create Post"
          icon={AddCircleHalfDotIcon}
          onClick={onLinkClick}
        />
        <SidebarLink
          href="/notifications"
          label="Notifications"
          icon={Notification02Icon}
          onClick={onLinkClick}
        />
        <SidebarLink
          href="/profile"
          label="Profile"
          icon={User03Icon}
          onClick={onLinkClick}
        />
      </div>
    </>
  )
}
