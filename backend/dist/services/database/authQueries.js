"use strict";
//import pool from './index';
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
exports.getAuthById = void 0;
const fs_1 = __importDefault(require("fs"));
const promise_1 = __importDefault(require("mysql2/promise"));
const pool = promise_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'test_auth',
    port: Number(process.env.DB_PORT),
    ssl: {
        ca: fs_1.default.readFileSync('../ca-certificate.crt'),
        rejectUnauthorized: true,
    },
});
// Прийняти ID, повернути аутентифікаційні данні
function getAuthById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const [rows] = await pool.query<ClientAuth[]>(
            //   'SELECT * FROM clients_auth WHERE id = ?',
            //   [id],
            // );
            const [rows] = yield pool.query('SELECT * FROM auth WHERE id = ?', [id]);
            if (rows.length > 0) {
                return rows[0]; // Return the first (and likely only) row
            }
            else {
                return null; // No rows found
            }
        }
        catch (error) {
            console.error('Error executing query', error);
            return null;
        }
    });
}
exports.getAuthById = getAuthById;
