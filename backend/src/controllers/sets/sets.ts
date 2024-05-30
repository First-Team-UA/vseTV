import HttpError from '../../helpers/HttpError';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import hashing from '../../helpers/hashing';
import { clientSets } from '../../services/database/setsQueries';
import { NextFunction, Request, Response } from 'express';

export const getSetChannels = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await clientSets();
    console.log(clientSets);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
