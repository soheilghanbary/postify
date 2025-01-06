'use client'
import {
  AddCircleHalfDotIcon,
  Fire03Icon,
  Home01Icon,
  Notification02Icon,
  User03Icon,
} from '@/components/common/icons'
import { NavigationLink } from './NavigationLink'

type Props = {
  isSigned: boolean
}

export const NavigationBar = ({ isSigned }: Props) => {
  return (
    <nav className="fixed bottom-0 left-0 z-20 grid w-full grid-cols-5 items-center border-t bg-background text-foreground/75 md:hidden">
      <NavigationLink href="/home" label="Home" icon={Home01Icon} />
      <NavigationLink href="/trends" label="Trends Posts" icon={Fire03Icon} />
      <NavigationLink href="/new" label="New" icon={AddCircleHalfDotIcon} />
      <NavigationLink
        href="/notifications"
        label="Notifications"
        icon={Notification02Icon}
      />
      <NavigationLink href="/profile" label="Profile" icon={User03Icon} />
    </nav>
  )
}
