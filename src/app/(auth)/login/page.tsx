import { OAuth } from '@/components/features/AuthModal/OAuth'
import { auth } from '@/server/auth'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = await auth()
  if (session) redirect('/home')
  return (
    <div className="mx-auto my-12 max-w-sm rounded-lg border p-4">
      <div className="mb-4">
        <h1 className="font-semibold">Sign In with</h1>
        <p className="text-sm/6">Welcome Back! Sign In</p>
      </div>
      <OAuth />
    </div>
  )
}
