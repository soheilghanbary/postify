import { auth } from "../auth";
import { prisma } from "../db";

export async function searchPosts(query: string) {
  const session = await auth()
  const userId = session?.user?.id
  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          url: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
    include: {
      votes: {
        select: {
          userId: true,
        }
      },
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        }
      }
    }
  })
  return posts.map((post) => ({
    ...post,
    hasVoted: post.votes.some((vote) => vote.userId === userId),
  }))
}

export async function getPosts() {
  const session = await auth()
  const userId = session?.user?.id
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
    include: {
      votes: {
        select: {
          userId: true,
        }
      },
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        }
      }
    }
  })
  return posts.map((post) => ({
    ...post,
    hasVoted: post.votes.some((vote) => vote.userId === userId),
  }))
}

export function getPost(id: string) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  })
}

export async function handlePostVote(postId: string, action: 'upvote' | 'downvote') {
  return await prisma.post.update({
    where: { id: postId },
    data: { points: action === 'upvote' ? { increment: 1 } : { decrement: 1 } },
  });
}