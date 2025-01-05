'use client'
import { TextField } from '@/components/common/text-field'
import { TextFieldArea } from '@/components/common/text-field-area'
import { Button } from '@/components/ui/button'
import { useAddPost } from '@/hooks/usePosts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type Schema = z.infer<typeof schema>

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  url: z.string().min(1, 'URL is required').url(),
  content: z.string().min(1, 'Content is required'),
})

export const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  })

  const { mutateAsync, isPending } = useAddPost()

  const onSubmit = handleSubmit(async (data) => {
    await mutateAsync(data, {
      onSuccess: (data) => {
        toast.success(data.message)
      },
    })
  })

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <TextField
        label="Title"
        {...register('title')}
        error={errors.title?.message}
      />
      <TextField label="URL" {...register('url')} error={errors.url?.message} />
      <TextFieldArea
        label="Content"
        {...register('content')}
        error={errors.content?.message}
      />
      <Button disabled={isPending} type="submit" className="w-fit">
        Post Now
      </Button>
    </form>
  )
}
