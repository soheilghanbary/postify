'use client'
import { TextField } from '@/components/common/text-field'
import { Tiptap } from '@/components/common/tiptap'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useAddPost } from '@/hooks/usePosts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

type Schema = z.infer<typeof schema>

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  url: z.string(),
  content: z.string().min(1, 'Content is required'),
})

export const AddPost = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      url: '',
    },
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
      <div className="grid gap-2 [&_label]:text-sm">
        <Label htmlFor="content">content</Label>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Tiptap value={field.value} onChange={field.onChange} />
          )}
        />
        {errors.content && (
          <span className="font-medium text-destructive text-xs">
            {errors.content.message}
          </span>
        )}
      </div>
      <Button disabled={isPending} type="submit" className="w-fit">
        Post Now
      </Button>
    </form>
  )
}
