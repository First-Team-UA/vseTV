import dotenv from 'dotenv';
import express from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import channelsRouter from './routes/channels';
import { testConnection } from './services/database/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/channels", channelsRouter);

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
  testConnection();
});