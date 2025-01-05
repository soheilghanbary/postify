import { LoadingIcon } from '@/components/common/icons'
import type { PostProps } from '@/types'
import { PostCard } from './PostCard'

type Props = {
  posts: PostProps[]
}

export const PostListSkeleton = () => (
  <LoadingIcon className="mx-auto my-12 size-6 fill-primary" />
)

export const PostList = ({ posts }: Props) => {
  return (
    <div className="grid gap-4">
      {posts.map((p, i) => (
        <PostCard key={i} {...p} />
      ))}
    </div>
  )
}
