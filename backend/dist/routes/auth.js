"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controllers/auth/auth");
const express_1 = require("express");
const auth_2 = __importDefault(require("../middlewares/auth"));
const authRouter = (0, express_1.Router)();
authRouter.post('/', auth_1.authCtrl.logIn);
authRouter.post('/:id/logout', auth_2.default, auth_1.authCtrl.logOut);
exports.default = authRouter;
