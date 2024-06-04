// import HttpError from '../../helpers/HttpError';
// import ctrlWrapper from '../../helpers/ctrlWrapper';
//import hashing from '../../helpers/hashing';
import { getAuth } from '../../services/database/authQueries';
import { NextFunction, Request, Response } from 'express';

export const logIn = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { login, password } = req.body;
  const testResult = await getAuth(login, password);
  console.log(testResult);

  res.send(testResult);
  ``;
};

export const logOut = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};
