import { authCtrl } from '../controllers/auth/auth';
import { Request, Response, Router } from 'express';
import auth from '../middlewares/auth';

const authRouter = Router();

authRouter.post('/', authCtrl.logIn);

authRouter.post('/:id/logout',auth, authCtrl.logOut)

export default authRouter;
