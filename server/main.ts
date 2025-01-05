import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { postsRoutes } from './routes/posts.route'
import { usersRoute } from './routes/users.route'

// initialize hono app
export const app = new Hono()
export type ApiRoutes = typeof apiRoutes

// middlewares
app.use('*', logger())
app.use(
  '*',
  cors({
    credentials: true,
    origin: (origin) => origin,
    allowHeaders: ['Content-Type'],
  })
)

// routes
const apiRoutes = app.basePath('/api')
  .route('/posts', postsRoutes)
  .route('/users', usersRoute)
