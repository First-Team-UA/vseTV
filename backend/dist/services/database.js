var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from "dotenv";
import mysql from "mysql2/promise";
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
dotenv.config();
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        try {
            const connection = yield pool.getConnection();
            console.log("Connected to the database!");
            connection.release();
        }
        catch (error) {
            console.error("Connection error:", error);
        }
    });
}
testConnection();
// export async function getUsers() {
//   const [rows] = await pool.query("SELECT * FROM users")
//   return rows
// }
export function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [rows] = yield pool.query("SELECT * FROM users");
            return rows;
        }
        catch (error) {
            console.error("Database query error:", error);
            throw error;
        }
    });
}
