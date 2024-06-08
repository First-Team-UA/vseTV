// import HttpError from '../../helpers/HttpError';
// import ctrlWrapper from '../../helpers/ctrlWrapper';
//import hashing from '../../helpers/hashing';

import { signToken } from '../../helpers/JWTHandling';
import { getAuth, sendToken } from '../../services/database/authQueries';
import { number } from '@hapi/joi';
import { NextFunction, Request, Response } from 'express';

export const logIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { login, password } = req.body;
  const authResult = await getAuth(login, password);

  if (authResult === null) {
    res.status(401).send('Authentication failed');
    return;
  }

  const jwt = signToken(String(authResult.id));
  await sendToken(String(authResult.id), jwt);

  res.status(201).send(jwt);
};

export const logOut = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};
