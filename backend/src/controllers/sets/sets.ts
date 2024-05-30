import HttpError from '../../helpers/HttpError';
import ctrlWrapper from '../../helpers/ctrlWrapper';
import hashing from '../../helpers/hashing';
import { getSetChannels } from '../../services/database/setsQueries';
import { NextFunction, Request, Response } from 'express';

export const SetChannels = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getSetChannels();

    res.json(result);
  } catch (error) {
    next(error);
  }
};
