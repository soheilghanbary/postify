import { api } from '@/lib/api'
import type { PostProps } from '@/types'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

export const useAllPosts = () => {
  const [query] = useQueryState('q')

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['posts', query],
    queryFn: async ({ pageParam }) => {
      // Construct the query URL
      const url = query
        ? `/api/posts?q=${query}&page=${pageParam}`
        : `/api/posts?page=${pageParam}`

      const res = await fetch(url)
      return (await res.json()) as Promise<PostProps[]>
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 1 ? allPages.length + 1 : undefined
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
    onMutate: async (data) => {
      // Cancel any outgoing refetches to avoid overwriting optimistic update
      await queryClient.cancelQueries({ queryKey: ['posts', query] });

      // Snapshot of the current state before mutation
      const previousPosts = queryClient.getQueryData(['posts', query]);

      if (previousPosts) {
        // Destructure the previous posts and pagination information
        const { pageParams, pages } = previousPosts as { pageParams: number[], pages: any[] };

        // Optimistically update the pages of posts
        queryClient.setQueryData(['posts', query], {
          pageParams,
          pages: pages.map((page: any) => {
            // Update the posts in the current page
            return page.map((post: any) =>
              post.id === data.postId
                ? {
                  ...post,
                  hasVoted: !post.hasVoted, // Toggle vote
                  votes: post.hasVoted ? post.votes - 1 : post.votes + 1, // Adjust vote count
                  points: post.hasVoted ? post.points - 1 : post.points + 1, // Adjust point count
                }
                : post
            );
          }),
        });
      }

      return { previousPosts };
    },
  });
};

export const usePost = (id: string) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const res = await fetch(`/api/posts/${id}`)
      return await res.json() as Promise<PostProps>
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}