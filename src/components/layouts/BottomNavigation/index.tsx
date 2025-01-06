import { NavigationBar } from './NavigationBar'

export default async () => {
  const token = true
  return <NavigationBar isSigned={!!token} />
}
