"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controllers/auth/auth");
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
authRouter.post('/', auth_1.logIn);
exports.default = authRouter;
