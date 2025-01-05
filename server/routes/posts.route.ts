import { Hono } from 'hono'
import { auth } from '../auth'
import { prisma } from '../db'
import { getPosts, searchPosts } from '../services/posts.service'

export const postsRoutes = new Hono()
  .get('/', async (c) => {
    const query = c.req.query('q')
    if (query) {
      const posts = await searchPosts(query)
      return c.json(posts)
    }
    const posts = await getPosts()
    return c.json(posts)
  })
  .get('/:id', async (c) => {
    const post = await prisma.post.findUnique({
      where: {
        id: c.req.param('id'),
      },
    })
    return c.json(post)
  })
  .post('/', async (c) => {
    const session = await auth()
    const values = await c.req.json()
    await prisma.post.create({
      data: { ...values, userId: session?.user?.id },
    })
    return c.json({ status: 'success', message: 'Post created successfully' })
  })
  .put('/:id', async (c) => {
    const data = await c.req.json()
    const post = await prisma.post.update({
      where: {
        id: c.req.param('id'),
      },
      data,
    })
    return c.json({ status: 'success', message: 'Post updated successfully' })
  })
  .delete('/:id', async (c) => {
    const post = await prisma.post.delete({
      where: {
        id: c.req.param('id'),
      },
    })
    return c.json({ status: 'success', message: 'Post deleted successfully' })
  })
