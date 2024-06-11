import {setControllers} from '../controllers/sets/sets';
import { Request, Response, Router } from 'express';


// import { getChannels } from "../services/database/channelQueries"

const setsRouter = Router();

setsRouter.get('/:setId/channels', setControllers.setChannels);
setsRouter.post('/:setId/update', setControllers.updateSet);

export default setsRouter;