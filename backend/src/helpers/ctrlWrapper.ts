import { Request, Response, NextFunction, ErrorRequestHandler } from "express";


const ctrlWrapper = (ctrl: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default ctrlWrapper;