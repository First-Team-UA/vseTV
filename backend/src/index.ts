import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { getUsers } from '../src/services/database/userQueries';
import { getTableColumns } from '../src/services/database/channelQueries';
import { testConnection } from '../src/services/database/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express!:)");
});

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
});

app.get("/table-columns/:tableName", async (req: Request, res: Response) => {
  const { tableName } = req.params;
  try {
    const columns = await getTableColumns(tableName);
    res.json(columns);
  } catch (error) {
    res.status(500).send("Error fetching table columns");
  }
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
  testConnection();
});