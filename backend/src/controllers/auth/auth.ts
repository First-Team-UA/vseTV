import HttpError from '../../helpers/HttpError';
import JWTHandling from '../../helpers/JWTHandling';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import hashing from '../../helpers/hashing';
//import hashing from '../../helpers/hashing';
import {
  ClientAuth,
  getAuth,
  logout,
  setToken,
} from '../../services/database/authQueries';
import { NextFunction, Request, Response } from 'express';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  const { login, password } = req.body;

  const hashPass = await hashing.hashPassword(password, 10);

  const testResult = (await getAuth(login, hashPass)) as ClientAuth;

  const newToken = JWTHandling.signToken(testResult.id.toString());

  await setToken(newToken, testResult.id);

  try {
    const finalResult = (await getAuth(login, hashPass)) as ClientAuth;
    res.send({ finalResult, status: 200 });
  } catch (error) {
    const err = new HttpError(404, 'Not Found');
    res.send({ error: err.message, status: 404 });
    throw err;
  }
};

export const logOut = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  try {
    await logout(Number(id));
    res.send('LogoutSuccessful');
  } catch (error) {
    const err = new HttpError(404, 'Not Found');
    throw err;
  }
};

export const authCtrl = {
  logIn: ctrlWrapper(logIn),
  logOut: ctrlWrapper(logOut),
};
