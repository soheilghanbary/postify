import {
  Bookmark02Icon,
  BubbleChatIcon,
  Clock01Icon,
  Link02Icon,
  TriangleIcon,
  User03Icon,
} from '@/components/common/icons'
import { Separator } from '@/components/ui/separator'
import type { PostProps } from '@/types'

export const PostCard = ({
  title,
  content,
  url,
  createdAt,
  commentsCount,
  points,
  user,
}: PostProps) => {
  return (
    <div className="flex rounded-lg border bg-card">
      <div className="flex flex-col items-center gap-1.5 border-r p-4 text-center">
        <button type="button" className="text-muted-foreground">
          <TriangleIcon className="size-3.5 text-current" />
        </button>
        <span className="font-medium text-foreground/85 text-xs">{points}</span>
        <button type="button" className="rotate-180 text-muted-foreground">
          <TriangleIcon className="size-3.5 text-current" />
        </button>
      </div>
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
