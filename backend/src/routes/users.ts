import { Router, Request, Response } from 'express';
import { getUsers } from '../services/database/userQueries';

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

export default router;
