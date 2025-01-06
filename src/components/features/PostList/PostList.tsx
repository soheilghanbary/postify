import { LoadingIcon } from '@/components/common/icons'
import { PostCard } from '@/components/features/Post/PostCard'
import type { PostProps } from '@/types'

type Props = {
  posts: PostProps[]
}

export const PostListSkeleton = () => (
  <LoadingIcon className="mx-auto my-12 size-6 fill-primary" />
)

export const PostList = ({ posts }: Props) => {
  return (
    <div className="grid">
      {posts.map((p, i) => (
        <PostCard key={i} {...p} />
      ))}
    </div>
  )
}
