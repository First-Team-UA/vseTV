"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = (password, salt = 10) => bcrypt_1.default.hash(password, salt);
const comparePasswords = (incoming, present) => bcrypt_1.default.compare(incoming, present);
exports.default = { hashPassword, comparePasswords };
