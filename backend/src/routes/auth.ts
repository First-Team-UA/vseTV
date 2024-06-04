import { logIn } from '../controllers/auth/auth';
import { Request, Response, Router } from 'express';

const authRouter = Router();

authRouter.post('/', logIn);

export default authRouter;
