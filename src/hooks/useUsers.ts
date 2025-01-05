import type { UserProps } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useTopUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('/api/users/top')
      return (await res.json()) as Promise<UserProps[]>
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}
