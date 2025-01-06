import {
  AddCircleHalfDotIcon,
  Notification02Icon,
} from '@/components/common/icons'
import { ModeToggle } from '@/components/common/mode-toggle'
import { AuthModal } from '@/components/features/AuthModal'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { auth } from '@/server/auth'
import Link from 'next/link'

export const CheckAuthLoader = () => (
  <Skeleton className="h-10 w-28 rounded-full" />
)

export const CheckAuth = async () => {
  const session = await auth()
  return session ? (
    <div className="flex items-center gap-2">
      <Button asChild fullRounded>
        <Link href={'/home'}>
          <AddCircleHalfDotIcon />
          Submit
        </Link>
      </Button>
    </div>
  ) : (
    <AuthModal />
  )
}
