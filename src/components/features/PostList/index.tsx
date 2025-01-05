'use client'
import { useAllPosts } from '@/hooks/usePosts'
import { useEffect, useRef } from 'react'
import { PostList, PostListSkeleton } from './PostList'
export { PostList } from './PostList'

export const AllPosts = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAllPosts()

  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isFetchingNextPage) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 } // فقط زمانی که به طور کامل عنصر در ویو قرار گرفت
    )

    observer.observe(observerRef.current)

    return () => {
      observer.disconnect() // پاک‌سازی observer
    }
  }, [hasNextPage, fetchNextPage, isFetchingNextPage])

  if (isLoading) return <PostListSkeleton />
  if (!data) return null

  const posts = data.pages.flat()

  return (
    <>
      <PostList posts={posts} />
      <div ref={observerRef} style={{ height: '1px' }} />
      {isFetchingNextPage && <PostListSkeleton />}
    </>
  )
}
