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
exports.updatePassword = exports.updateClientInfo = exports.getClientById = exports.getClients = void 0;
const HttpError_1 = __importDefault(require("../../helpers/HttpError"));
const index_1 = __importDefault(require("./index"));
function getClients() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [rows] = yield index_1.default.query("SELECT * FROM clients");
            return rows;
        }
        catch (error) {
            console.error("Database query error:", error);
            const err = new HttpError_1.default(404, "Not Found");
            throw err;
        }
    });
}
exports.getClients = getClients;
const getClientById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield index_1.default.query(`SELECT clients.id, name, token, contact_email_tech, contact_email_fin, contact_tel_tech, contact_tel_fin, active, password FROM clients, clients_auth WHERE clients.id=clients_auth.id AND clients.id=?`, [id]);
        if (rows.length > 0) {
            return rows[0];
        }
        else {
            return null;
        }
    }
    catch (error) {
        const err = new HttpError_1.default(404, "Not Found");
        throw err;
    }
});
exports.getClientById = getClientById;
const updateClientInfo = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.default.execute(`UPDATE clients SET name=?, contact_email_tech=?, contact_email_fin=?, contact_tel_tech=?, contact_tel_fin=?  WHERE id=?`, [update.name, update.contact_email_tech, update.contact_email_fin, update.contact_tel_tech, update.contact_tel_fin, id]);
    }
    catch (error) {
        const err = new HttpError_1.default(404, "Not Found");
        throw err;
    }
});
exports.updateClientInfo = updateClientInfo;
const updatePassword = (id, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.default.execute(`UPDATE clients_auth SET password=? WHERE id=?`, [password, id]);
    }
    catch (error) {
        const err = new HttpError_1.default(404, "Not Found");
        throw err;
    }
});
exports.updatePassword = updatePassword;
