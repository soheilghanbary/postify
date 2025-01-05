import { FilterPostList } from '@/components/features/FilterPostList'
import { AllPosts, PostList } from '@/components/features/PostList'
import { TopUsers, UserList } from '@/components/features/UserList'

export default function Page() {
  return (
    <>
      <FilterPostList />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <AllPosts />
          {/* <PostList posts={[]} /> */}
        </div>
        <div className="col-span-1">
          <TopUsers />
        </div>
      </div>
    </>
  )
}
