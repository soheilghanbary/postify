import {
  AddCircleHalfDotIcon,
  Fire03Icon,
  Home01Icon,
  Notification02Icon,
  User03Icon,
} from '@/components/common/icons'
import { SidebarLink } from './SidebarLink'

type Props = {
  onLinkClick?: () => void
}

export const SidebarContent = ({ onLinkClick }: Props) => {
  return (
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
  )
}
