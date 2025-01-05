import { prisma } from "../db";

export async function getTopUsers() {
  return await prisma.user.findMany({
    take: 3,
    include: {
      _count: {
        select: {
          posts: true
        }
      },
    },
    orderBy: {
      posts: { _count: 'desc' }
    }
  })
}