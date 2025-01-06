import { FilterPostList } from '@/components/features/FilterPostList'
import { AllPosts } from '@/components/features/PostList'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Suspense>
        <AllPosts />
      </Suspense>
    </>
  )
}
