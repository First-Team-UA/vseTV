import { Router } from 'express';
import { clientControllers } from '../controllers/clients/clients';
import auth from '../middlewares/auth';
import validateBody from '../helpers/validateBody';
import { changePasswordSchema, updateInfoSchema } from '../schemas/clientsSchema';

const router = Router();

router.get("/admin/clients",  auth, clientControllers.getClientsInfo);

router.get('/:id',  auth, clientControllers.getClientInfo);

router.patch('/:id',  auth,validateBody(updateInfoSchema), clientControllers.changeClientInfo);

router.patch('/:id/password', auth, validateBody(changePasswordSchema), clientControllers.changePassword)

export default router;
