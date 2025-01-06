'use client'
import {
  AddCircleHalfDotIcon,
  Home01Icon,
  Login02Icon,
  Notification02Icon,
  User03Icon,
} from '@/components/common/icons'
import { AuthModal } from '@/components/features/AuthModal'
import { SearchFieldModal } from '@/components/features/SearchField/SearchFieldModal'
import { cn } from '@/lib/utils'
import { NavigationLink } from './NavigationLink'

type Props = {
  isSigned: boolean
}

export const NavigationBar = ({ isSigned }: Props) => {
  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 z-20 grid w-full items-center border-t bg-background text-foreground/75 md:hidden',
        isSigned ? 'grid-cols-5' : 'grid-cols-3'
      )}
    >
      <NavigationLink href="/" label="Home" icon={Home01Icon} />
      <SearchFieldModal />
      {isSigned ? (
        <>
          <NavigationLink href="/new" label="New" icon={AddCircleHalfDotIcon} />
          <NavigationLink
            href="/activity"
            label="Activity"
            icon={Notification02Icon}
          />
          <NavigationLink href="/profile" label="Profile" icon={User03Icon} />
        </>
      ) : (
        <AuthModal
          initialTrigger={
            <button
              type="button"
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 p-2 text-xs/5'
              )}
            >
              <Login02Icon className="size-5 text-current" />
              Sign In
            </button>
          }
        />
      )}
    </nav>
  )
}
