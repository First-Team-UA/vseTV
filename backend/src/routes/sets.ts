import { SetChannels, UpdateSet } from '../controllers/sets/sets';
import { Request, Response, Router } from 'express';


// import { getChannels } from "../services/database/channelQueries"

const setsRouter = Router();

setsRouter.get('/:setId/channels', SetChannels);
setsRouter.post('/:setId/update', UpdateSet);

export default setsRouter;