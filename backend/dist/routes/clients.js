"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = require("../controllers/clients/clients");
const auth_1 = __importDefault(require("../middlewares/auth"));
const validateBody_1 = __importDefault(require("../helpers/validateBody"));
const clientsSchema_1 = require("../schemas/clientsSchema");
const router = (0, express_1.Router)();
router.get("/admin/clients", auth_1.default, clients_1.clientControllers.getClientsInfo);
router.get('/:id', auth_1.default, clients_1.clientControllers.getClientInfo);
router.patch('/:id', auth_1.default, (0, validateBody_1.default)(clientsSchema_1.updateInfoSchema), clients_1.clientControllers.changeClientInfo);
router.patch('/:id/password', auth_1.default, (0, validateBody_1.default)(clientsSchema_1.changePasswordSchema), clients_1.clientControllers.changePassword);
exports.default = router;
