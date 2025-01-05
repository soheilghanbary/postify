import type { Prisma } from '@prisma/client'

type PostProps = Prisma.PostGetPayload<{
  include: {
    user: {
      select: {
        id: true
        name: true
        image: true
      }
    }
  }
}>

type CurrentUserProps = Prisma.UserGetPayload<{
  include: {
    posts: true
  }
}> & {
  _count?: {
    posts: number
  }
}

type TopUserProps = Prisma.UserGetPayload<{
  include: {
    _count: {
      select: {
        posts: true
      }
    }
  }
}>

type UserProps = CurrentUserProps | TopUserProps