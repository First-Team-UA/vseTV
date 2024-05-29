import HttpError from "./HttpError.js";
import { Request, Response, NextFunction } from "express";
import {Schema} from '@hapi/joi'


const validateBody = (schema:Schema) => {
  const func = (req: Request, _:any, next: NextFunction) => {
    const { error } = schema.validate(req.body);
      if (error) {
        const err = new HttpError(400, error.message)
      next(err);
    }
    next();
  };

  return func;
};

export default validateBody;