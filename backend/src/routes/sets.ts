import { Request, Response, Router } from "express"

import { getSetChannels } from "../controllers/sets/sets"

// import { getChannels } from "../services/database/channelQueries"

const setsRouter = Router()

setsRouter.get("/:setID/channels", getSetChannels)



export default setsRouter
