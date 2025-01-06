import {
  BubbleChatIcon,
  Clock01Icon,
  Link02Icon,
  User03Icon,
} from '@/components/common/icons'
import { Separator } from '@/components/ui/separator'
import { fromNow } from '@/lib/utils'
import type { PostProps } from '@/types'
import Link from 'next/link'
import { PostVote } from '../Post/PostVote'

export const PostCard = ({
  id,
  title,
  content,
  url,
  createdAt,
  commentsCount,
  points,
  user,
  hasVoted,
}: PostProps) => {
  return (
    <div className="flex border-b bg-card">
      <PostVote postId={id} points={points} hasVoted={hasVoted} />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/p/${id}`} shallow prefetch>
          <h2 className="line-clamp-1 font-semibold text-sm/6 md:text-base/normal">
            {title}
          </h2>
          <div
            className="line-clamp-2 text-foreground/85 text-xs/6 md:text-sm/7 [&_a]:font-bold [&_a]:text-primary [&_a]:underline [&_a]:decoration-wavy-offset-4 [&_a]:decoration-wavy [&_a]:underline-offset-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Link>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
            <Clock01Icon className="size-4" />
            <span>{fromNow(createdAt)}</span>
          </div>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-primary text-xs/6"
            >
              <Link02Icon className="size-4" />
              <span className="line-clamp-1 w-64 overflow-hidden text-ellipsis">
                {url}
              </span>
            </a>
          )}
        </div>
        <Separator />
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
            <User03Icon className="size-4" />
            <span>{user.name}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
            <BubbleChatIcon className="size-4" />
            <span>{commentsCount} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
