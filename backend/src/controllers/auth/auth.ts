import HttpError from '../../helpers/HttpError';
import JWTHandling from '../../helpers/JWTHandling';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import hashing from '../../helpers/hashing';
//import hashing from '../../helpers/hashing';
import {
  ClientAuth,
  getAuth,
  getID,
  logout,
  setToken,
} from '../../services/database/authQueries';
import { NextFunction, Request, Response } from 'express';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  const { login, password } = req.body;

  const testResult = (await getID(login, password)) as ClientAuth;
  console.log(`first use`);

  const hashPass = await hashing.hashPassword(password, 10);

  const newToken = JWTHandling.signToken(testResult.id.toString());

  await setToken(newToken, testResult.id);

  try {
    console.log(`second use`);
    const finalResult = (await getAuth(login, password)) as ClientAuth;

    console.log(finalResult);
    res.status(200).json({ finalResult });
  } catch (error) {
    const err = new HttpError(404, 'Not Found');
    res.status(404).json({ error: err.message });
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
