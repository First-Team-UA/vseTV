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

  const setId:number = parseInt(req.params.setId, 10);
console.log(setId)
  try {
    const result = await getSetChannels(setId);

    res.json(result);
  } catch (error) {
    next(error);
  }
};


export const UpdateSet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
   
  } catch (error) {
    next(error);
  }
};