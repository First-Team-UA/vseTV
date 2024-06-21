import { Router } from 'express';
import { clientControllers } from '../controllers/clients/clients';
import auth from '../middlewares/auth';
import validateBody from '../helpers/validateBody';
import { changePasswordSchema, updateInfoSchema } from '../schemas/clientsSchema';

const router = Router();

router.get("/admin/clients",  clientControllers.getClientsInfo);

router.get('/:id',  clientControllers.getClientInfo);

router.patch('/:id',  validateBody(updateInfoSchema), clientControllers.changeClientInfo);

router.patch('/:id/password', validateBody(changePasswordSchema), clientControllers.changePassword)

export default router;
