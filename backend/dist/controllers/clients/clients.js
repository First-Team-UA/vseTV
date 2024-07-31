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
exports.clientControllers = void 0;
const HttpError_1 = __importDefault(require("../../helpers/HttpError"));
const ctrlWrapper_1 = __importDefault(require("../../helpers/ctrlWrapper"));
const hashing_1 = __importDefault(require("../../helpers/hashing"));
const sendMail_1 = __importDefault(require("../../helpers/sendMail"));
const clientsQueries_1 = require("../../services/database/clientsQueries");
const getClientsInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield (0, clientsQueries_1.getClients)();
        console.log(clients);
        res.status(200).json(clients);
    }
    catch (error) {
        const err = new HttpError_1.default(500, 'Error fetching clients');
        throw err;
    }
});
const getClientInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const client = yield (0, clientsQueries_1.getClientById)(Number(id));
        const { name, contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin, active, token, } = client;
        res
            .status(200)
            .json({
            name,
            contact_email_tech,
            contact_email_fin,
            contact_tel_tech,
            contact_tel_fin,
            active,
            token,
        });
    }
    catch (error) {
        const err = new HttpError_1.default(404, 'Client not found');
        throw err;
    }
});
const changeClientInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin, } = req.body;
    const { id } = req.params;
    console.log(id);
    const newInfo = {
        contact_email_tech,
        contact_email_fin,
        contact_tel_tech,
        contact_tel_fin,
    };
    try {
        yield (0, clientsQueries_1.updateClientInfo)(Number(id), newInfo);
        res.status(200).json(newInfo);
    }
    catch (error) {
        const err = new HttpError_1.default(404, 'Client not found');
        throw err;
    }
});
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;
    const { contact_email_tech, contact_email_fin, password } = (yield (0, clientsQueries_1.getClientById)(Number(id)));
    const passwordCompare = yield hashing_1.default.comparePasswords(oldPassword, password);
    if (!passwordCompare)
        throw new HttpError_1.default(401, 'The current password is wrong');
    const hashPassword = yield hashing_1.default.hashPassword(newPassword);
    const date = getDate();
    const combinedMails = `${contact_email_tech}, ${contact_email_fin}`;
    const mailContent = {
        to: combinedMails,
        subject: 'Изменение пароля',
        html: `<p> Ваш пароль был успешно изменен ${date}!</p>`,
    };
    try {
        yield (0, clientsQueries_1.updatePassword)(Number(id), hashPassword);
        yield (0, sendMail_1.default)(mailContent);
        res.status(200).json('The password has been successfully updated');
    }
    catch (error) {
        const err = new HttpError_1.default(404, 'Client not found');
        throw err;
    }
});
exports.clientControllers = {
    getClientInfo: (0, ctrlWrapper_1.default)(getClientInfo),
    getClientsInfo: (0, ctrlWrapper_1.default)(getClientsInfo),
    changeClientInfo: (0, ctrlWrapper_1.default)(changeClientInfo),
    changePassword: (0, ctrlWrapper_1.default)(changePassword),
};
