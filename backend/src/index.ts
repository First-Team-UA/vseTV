import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';



import HttpError from './helpers/HttpError';
import channelsRouter from './routes/channels';
import clientsRouter from './routes/clients';
import indexRouter from './routes/index';
import { testConnection } from './services/database/index';
import setsRouter from './routes/sets';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())

app.use("/", indexRouter);
app.use("/clients", clientsRouter);
app.use("/channels", channelsRouter)
app.use("/api/sets", setsRouter)

app.use((err: HttpError, req: Request, res: Response,next: NextFunction):void => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
} )

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
  testConnection();
});