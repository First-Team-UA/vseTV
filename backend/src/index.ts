import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import tableColumnsRouter from './routes/tableColumns';
import { testConnection } from '../src/services/database/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/table-columns", tableColumnsRouter);

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
  testConnection();
});