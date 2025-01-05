import { TextField } from '@/components/common/text-field'
import { TextFieldArea } from '@/components/common/text-field-area'
import { AddPost } from '@/components/features/AddPost'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-4 text-center font-bold text-lg">Submit a Post</h1>
      <AddPost />
    </div>
  )
}
