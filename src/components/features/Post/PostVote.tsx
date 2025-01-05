import { TriangleIcon } from '@/components/common/icons'
import { useVotePost } from '@/hooks/usePosts'
import { cn } from '@/lib/utils'
import NumberFlow from '@number-flow/react'
import { motion } from 'motion/react'
import { useSession } from 'next-auth/react'
import { AuthModal } from '../AuthModal'

type Props = {
  postId: string
  points: number
  hasVoted: boolean
}

export const PostVote = ({ postId, points, hasVoted }: Props) => {
  const { data: session } = useSession() // وضعیت کاربر
  const { mutateAsync, isPending } = useVotePost()

  const handleVote = async (action: 'upvote' | 'downvote') => {
    await mutateAsync({
      postId,
      action,
    })
  }

  return (
    <div className="flex flex-col items-center gap-1.5 border-r p-4 text-center">
      {session ? (
        <motion.button
          whileTap={{ scale: 1.2 }}
          type="button"
          className={cn(
            'text-muted-foreground',
            hasVoted && 'text-primary/85 [&_svg]:fill-current'
          )}
          onClick={() => handleVote('upvote')}
        >
          <TriangleIcon className="size-3.5 text-current" />
        </motion.button>
      ) : (
        <AuthModal
          initialTrigger={
            <motion.button
              whileTap={{ scale: 1.2 }}
              type="button"
              className={cn(
                'text-muted-foreground',
                hasVoted && 'text-primary/85 [&_svg]:fill-current'
              )}
            >
              <TriangleIcon className="size-3.5 text-current" />
            </motion.button>
          }
        />
      )}
      <NumberFlow
        className="font-medium text-foreground/85 text-xs"
        value={points}
      />
    </div>
  )
}
