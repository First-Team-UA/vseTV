import HttpError from './helpers/HttpError';
import authRouter from './routes/auth';
import channelsRouter from './routes/channels';
import clientsRouter from './routes/clients';
import indexRouter from './routes/index';
import setsRouter from './routes/sets';
import { testConnection } from './services/database/index';
const cors = require('cors');
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from "swagger-ui-express";

const swaggerDocument = require("../swagger.json");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/clients', clientsRouter);
app.use('/channels', channelsRouter);
app.use('/api/sets', setsRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof HttpError) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
);

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
  testConnection();
});
