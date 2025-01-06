import { auth } from '@/server/auth'
import { NavigationBar } from './NavigationBar'

export default async () => {
  const session = await auth()
  return <NavigationBar isSigned={!!session} />
}
