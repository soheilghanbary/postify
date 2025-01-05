import { Hono } from 'hono';
import { auth } from '../auth';
import { prisma } from '../db';
import { getPosts, searchPosts } from '../services/posts.service';

export const postsRoutes = new Hono()
  .get('/', async (c) => {
    const query = c.req.query('q');
    const page = Number.parseInt(c.req.query('page') || '0');
    const posts = query ? await searchPosts(query) : await getPosts(page);
    return c.json(posts);
  })
  .get('/:id', async (c) => {
    const postId = c.req.param('id');
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) return c.json({ status: 'error', message: 'Post not found' }, 404);
    return c.json(post);
  })
  .post('/', async (c) => {
    const session = await auth();
    if (!session?.user?.id) return c.json({ status: 'error', message: 'Unauthorized' }, 401);

    const values = await c.req.json();
    await prisma.post.create({
      data: { ...values, userId: session.user.id },
    });
    return c.json({ status: 'success', message: 'Post created successfully' });
  })
  .put('/:id', async (c) => {
    const postId = c.req.param('id');
    const data = await c.req.json();
    const post = await prisma.post.update({
      where: { id: postId },
      data,
    });
    return c.json({ status: 'success', message: 'Post updated successfully', post });
  })
  .delete('/:id', async (c) => {
    const postId = c.req.param('id');
    await prisma.post.delete({ where: { id: postId } });
    return c.json({ status: 'success', message: 'Post deleted successfully' });
  })
  .post('/vote', async (c) => {
    const session = await auth();
    const userId = session?.user?.id!;
    const { postId }: { postId: string } = await c.req.json();

    const vote = await prisma.$transaction(async (tx) => {
      const existVote = await tx.vote.findUnique({
        where: { userId_postId: { userId, postId } },
      });
      // if user already voted
      if (existVote) {
        // delete vote
        await tx.vote.delete({ where: { userId_postId: { userId, postId } } });
        // update post points
        return await tx.post.update({ where: { id: postId }, data: { points: { decrement: 1 } } });
      }
      // create vote
      await tx.vote.create({ data: { userId, postId } });
      // update post points
      return await tx.post.update({ where: { id: postId }, data: { points: { increment: 1 } } });
    });

    return c.json({ status: 'vote processed!', vote });
  });
