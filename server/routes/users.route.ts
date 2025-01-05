import { Hono } from "hono";
import { getTopUsers } from "../services/users.service";

export const usersRoute = new Hono()
  .get('/top', async (c) => {
    const users = await getTopUsers()
    return c.json(users)
  })