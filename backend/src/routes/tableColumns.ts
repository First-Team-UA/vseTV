import { Router, Request, Response } from 'express';
import { getTableColumns } from '../services/database/channelQueries';

const router = Router();

router.get("/:tableName", async (req: Request, res: Response) => {
  const { tableName } = req.params;
  try {
    const columns = await getTableColumns(tableName);
    res.json(columns);
  } catch (error) {
    res.status(500).send("Error fetching table columns");
  }
});

export default router;
