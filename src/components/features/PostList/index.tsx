'use client'
import { useAllPosts } from '@/hooks/usePosts'
import { PostList, PostListSkeleton } from './PostList'
export { PostList } from './PostList'

export const AllPosts = () => {
  const { data, isPending } = useAllPosts()
  if (isPending) return <PostListSkeleton />
  if (!data) return null

  return <PostList posts={data} />
}
