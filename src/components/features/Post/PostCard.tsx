import {
  Bookmark02Icon,
  BubbleChatIcon,
  Clock01Icon,
  Link02Icon,
  User03Icon,
} from '@/components/common/icons'
import { Separator } from '@/components/ui/separator'
import type { PostProps } from '@/types'
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
    <div className="flex rounded-lg border bg-card">
      <PostVote postId={id} points={points} hasVoted={hasVoted} />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="line-clamp-1 font-semibold text-base/normal">{title}</h2>
        <p className="line-clamp-2 text-foreground/85 text-xs/5">{content}</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
            <Clock01Icon className="size-4" />
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </div>
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
          <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
            <Bookmark02Icon className="size-4" />
            <span>Save</span>
          </div>
        </div>
      </div>
    </div>
  )
}
