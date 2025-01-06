import { User03Icon } from '@/components/common/icons'
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
      <Button asChild fullRounded className="[&_svg]:size-5">
        <Link href={'/profile'}>
          <User03Icon />
          Profile
        </Link>
      </Button>
    </div>
  ) : (
    <AuthModal />
  )
}
