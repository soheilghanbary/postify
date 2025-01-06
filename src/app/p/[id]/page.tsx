import { BackButton } from '@/components/common/back-button'
import {
  BubbleChatIcon,
  Clock01Icon,
  Link02Icon,
  User03Icon,
} from '@/components/common/icons'
import { ScrollToTop } from '@/components/common/scroll-to-top'
import { Separator } from '@/components/ui/separator'
import { client } from '@/lib/api'
import { fromNow } from '@/lib/utils'
import type { PostProps } from '@/types'
import { notFound } from 'next/navigation'

const getPostById = async (id: string) => {
  const res = await client.get(`/posts/${id}`)
  return res.data
}

export default async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const post = (await getPostById(id)) as PostProps

  return (
    <>
      <ScrollToTop />
      {post ? (
        <div className="mx-auto flex max-w-2xl flex-col gap-4 rounded-lg border bg-card p-4">
          <BackButton />
          <h1 className="motion-preset-fade font-extrabold text-2xl">
            {post.title}
          </h1>
          <div
            className="motion-preset-fade whitespace-normal text-foreground/85 text-xs/6 md:text-sm/7 [&_*]:mb-2 [&_a]:font-bold [&_a]:text-primary [&_a]:underline [&_a]:decoration-wavy-offset-4 [&_a]:decoration-wavy [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Separator />
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
              <User03Icon className="size-4" />
              <span>{post.user.name}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
              <Clock01Icon className="size-4" />
              <span>{fromNow(post.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-xs/6">
              <BubbleChatIcon className="size-4" />
              <span>{post.commentsCount} comments</span>
            </div>
            {post.url && (
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-primary text-xs/6"
              >
                <Link02Icon className="size-4" />
                <span className="line-clamp-1 w-64 overflow-hidden text-ellipsis">
                  {post.url}
                </span>
              </a>
            )}
          </div>
        </div>
      ) : (
        notFound()
      )}
    </>
  )
}
