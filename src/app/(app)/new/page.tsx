import { AddPost } from '@/components/features/AddPost'

export default function Page() {
  return (
    <section className="md:p-4">
      <h1 className="mb-4 font-bold text-lg">Submit a Post</h1>
      <AddPost />
    </section>
  )
}
