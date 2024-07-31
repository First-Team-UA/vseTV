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
exports.logout = exports.setToken = exports.getAuth = void 0;
const index_1 = __importDefault(require("./index"));
const HttpError_1 = __importDefault(require("../../helpers/HttpError"));
// Прийняти логін і пароль, повернути аутентифікаційні данні
function getAuth(login, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [rows] = yield index_1.default.query('SELECT id, token, refreshtoken FROM clients_auth WHERE login = ? AND password = ?', [login, password]);
            if (Array.isArray(rows) && rows.length > 0) {
                return rows[0];
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.error('Error executing query', error);
            return null;
        }
    });
}
exports.getAuth = getAuth;
const setToken = (token, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.default.query('UPDATE clients_auth SET token=? WHERE id=?', [token, id]);
    }
    catch (error) {
        const err = new HttpError_1.default(404, "Not Found");
        throw err;
    }
});
exports.setToken = setToken;
const logout = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.default.query("UPDATE clients_auth SET token=? WHERE id=?", [null, id]);
    }
    catch (error) {
        const err = new HttpError_1.default(404, "Not Found");
        throw err;
    }
});
exports.logout = logout;
// const [rows] = await pool.query<ClientAuth[]>(
//   'SELECT * FROM clients_auth WHERE id = ?',
//   [id],
// );
