"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const { MAIL_EMAIL, MAIL_PASS } = process.env;
const nodemailerConfig = {
    host: "smtp.seznam.cz",
    port: 465,
    secure: true,
    auth: {
        user: MAIL_EMAIL,
        pass: MAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
};
const transport = nodemailer_1.default.createTransport(nodemailerConfig);
const sendEmail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const email = Object.assign(Object.assign({}, data), { from: `${MAIL_EMAIL}` });
    yield transport.sendMail(email);
    return true;
});
exports.default = sendEmail;
