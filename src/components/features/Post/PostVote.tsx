import { TriangleIcon } from '@/components/common/icons'
import { useVotePost } from '@/hooks/usePosts'
import { cn } from '@/lib/utils'

type Props = {
  postId: string
  points: number
  hasVoted: boolean
}

export const PostVote = ({ postId, points, hasVoted }: Props) => {
  const { mutateAsync, isPending } = useVotePost()

  const handleVote = async (action: 'upvote' | 'downvote') => {
    await mutateAsync({
      postId,
      action,
    })
  }

  return (
    <div className="flex flex-col items-center gap-1.5 border-r p-4 text-center">
      <button
        disabled={isPending}
        type="button"
        className={cn(
          'text-muted-foreground',
          hasVoted && 'text-primary/85 [&_svg]:fill-current'
        )}
        onClick={() => handleVote('upvote')}
      >
        <TriangleIcon className="size-3.5 text-current" />
      </button>
      <span className="font-medium text-foreground/85 text-xs">{points}</span>
    </div>
  )
}
