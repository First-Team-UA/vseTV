"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sets_1 = require("../controllers/sets/sets");
const express_1 = require("express");
// import { getChannels } from "../services/database/channelQueries"
const setsRouter = (0, express_1.Router)();
setsRouter.get('/:setId/channels', sets_1.setControllers.setChannels);
setsRouter.post('/:setId/update', sets_1.setControllers.updateSet);
exports.default = setsRouter;
