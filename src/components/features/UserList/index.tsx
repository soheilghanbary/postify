'use client'
import { useTopUsers } from '@/hooks/useUsers'
import { UserList, UserListSkeleton } from './UserList'
export { UserList } from './UserList'

export const TopUsers = () => {
  const { data, isPending } = useTopUsers()

  return (
    <div className="p-4">
      <h2 className="mb-4 font-bold text-base/normal">Top Users</h2>
      {isPending ? <UserListSkeleton /> : data && <UserList users={data} />}
    </div>
  )
}
