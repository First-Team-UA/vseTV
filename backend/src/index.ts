import dotenv from 'dotenv';
import express, { Request, Response, NextFunction} from 'express';
import indexRouter from './routes/index';
import clientsRouter from './routes/clients';
import channelsRouter from './routes/channels';
import { testConnection } from './services/database/index';
import HttpError from './helpers/HttpError';


const app = express();
const port = process.env.PORT || 4000;

app.use("/", indexRouter);
app.use("/clients", clientsRouter);
app.use("/channels", channelsRouter);

app.use((err: HttpError, req: Request, res: Response,next: NextFunction) => {
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