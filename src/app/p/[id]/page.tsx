'use client'
import { BackButton } from '@/components/common/back-button'
import {
  BubbleChatIcon,
  Clock01Icon,
  Link02Icon,
  LoadingIcon,
  User03Icon,
} from '@/components/common/icons'
import { ScrollToTop } from '@/components/common/scroll-to-top'
import { Separator } from '@/components/ui/separator'
import { usePost } from '@/hooks/usePosts'
import { fromNow } from '@/lib/utils'
import { useParams } from 'next/navigation'

export default function Page() {
  return (
    <>
      <ScrollToTop />
      <Post />
    </>
  )
}

const Post = () => {
  const params = useParams() as { id: string }
  const { data, isPending } = usePost(params.id)

  if (isPending) return <LoadingIcon className="mx-auto size-6 fill-primary" />
  if (!data) return <p>Post not Found</p>

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4">
      <BackButton />
      <h1 className="motion-preset-fade font-extrabold text-2xl">
        {data.title}
      </h1>
      <p className="motion-preset-fade-md text-foreground/85 text-xs/5">
        {data.content}
      </p>
      <Separator />
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
          <User03Icon className="size-4" />
          <span>{data.user.name}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
          <Clock01Icon className="size-4" />
          <span>{fromNow(data.createdAt)}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
          <BubbleChatIcon className="size-4" />
          <span>{data.commentsCount} comments</span>
        </div>
        <div
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-primary text-xs/6"
        >
          <Link02Icon className="size-4" />
          <span className="line-clamp-1 w-64 overflow-hidden text-ellipsis">
            Website
          </span>
        </div>
      </div>
    </div>
  )
}
