import { LicenseIcon } from '@/components/common/icons'
import { Skeleton } from '@/components/ui/skeleton'
import type { UserProps } from '@/types'
import Image from 'next/image'

type Props = {
  users: UserProps[]
}

export const UserListSkeleton = () =>
  Array.from({ length: 3 }).map((_, i) => (
    <div key={i} className="my-3 flex items-center justify-between gap-3">
      <Skeleton className="size-10 rounded-full" />
      <Skeleton className="h-5 w-2/4 rounded-full" />
      <Skeleton className="ml-auto h-5 w-16 rounded-full" />
    </div>
  ))

const UserCard = ({ name, image, _count }: UserProps) => {
  return (
    <div className="flex items-center gap-3 py-2">
      <Image
        alt="user"
        src={image}
        width={40}
        height={40}
        quality={100}
        sizes="120px"
        className="size-10 rounded-full bg-muted object-cover"
      />
      <h3 className="font-medium text-foreground text-sm">{name}</h3>
      <div className="ml-auto inline-flex items-center gap-1 text-muted-foreground text-xs/6">
        <LicenseIcon className="size-4" />
        <span>{_count?.posts || 0} posts</span>
      </div>
    </div>
  )
}

export const UserList = ({ users }: Props) => {
  return users.map((u, i) => <UserCard key={i} {...u} />)
}
