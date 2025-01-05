import { FilterPostList } from '@/components/features/FilterPostList'
import { AllPosts } from '@/components/features/PostList'
import { TopUsers } from '@/components/features/UserList'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <FilterPostList />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Suspense>
            <AllPosts />
          </Suspense>
        </div>
        <div className="col-span-1">
          <TopUsers />
        </div>
      </div>
    </>
  )
}
