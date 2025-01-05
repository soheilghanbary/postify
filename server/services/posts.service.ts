import { prisma } from "../db";

export function searchPosts(query: string) {
  return prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          content: {
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
    take: 5,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        }
      }
    }
  })
}

export function getPosts() {
  return prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        }
      }
    }
  })
}

export function getPost(id: string) {
  return prisma.post.findUnique({
    where: {
      id,
    },
  })
}