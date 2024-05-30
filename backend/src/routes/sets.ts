import { SetChannels } from '../controllers/sets/sets';
import { Request, Response, Router } from 'express';

// import { getChannels } from "../services/database/channelQueries"

const setsRouter = Router();

setsRouter.get('/:setID/channels', SetChannels);

export default setsRouter;
