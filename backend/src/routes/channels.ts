import { Router, Request, Response } from 'express';
import { getChannels } from '../services/database/channelQueries';

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const channels = await getChannels();
    res.json(channels);
  } catch (error) {
    res.status(500).send("Error fetching channels");
  }
});

export default router;
