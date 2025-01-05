import { api } from '@/lib/api'
import type { PostProps } from '@/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
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

export const useVotePost = () => {
  const queryClient = useQueryClient();
  const [query] = useQueryState('q')

  return useMutation({
    mutationFn: async (data: any) => {
      const res = await api.posts.vote.$post({ json: data });
      return await res.json();
    },
    // Optimistic update
    onMutate: async (data) => {
      // Cancel any outgoing refetches to avoid overwriting optimistic update
      await queryClient.cancelQueries({ queryKey: ['posts', query] });
      // Snapshot of the current state before mutation
      const previousPosts = queryClient.getQueryData(['posts', query]);
      // Optimistically update the UI
      queryClient.setQueryData(['posts', query], (oldPosts: any) => {
        return oldPosts.map((post: any) =>
          post.id === data.postId
            ? {
              ...post,
              hasVoted: !post.hasVoted, // Toggle vote
              votes: post.hasVoted ? post.votes - 1 : post.votes + 1, // Adjust vote count
              points: post.hasVoted ? post.points - 1 : post.points + 1, // Adjust point count
            }
            : post
        );
      });
      return { previousPosts };
    },
  });
};