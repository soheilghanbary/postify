import { api } from '@/lib/api'
import type { PostProps } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

export const useAllPosts = () => {
  const [query] = useQueryState('q')
  return useQuery({
    queryKey: ['posts', query],
    queryFn: async () => {
      if (query) {
        const res = await fetch(`/api/posts?q=${query}`)
        return (await res.json()) as Promise<PostProps[]>
      }
      const res = await fetch('/api/posts')
      return (await res.json()) as Promise<PostProps[]>
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}

export const useAddPost = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await api.posts.$post({ json: data })
      return await res.json()
    },
  })
}
