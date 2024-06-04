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
exports.getSetChannels = void 0;
const index_1 = __importDefault(require("./index"));
// Взяти всі канали, які є в наборі № ...
function getSetChannels(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [rows] = yield index_1.default.query('SELECT * FROM clients_set_channels WHERE set_id = ?', [id]);
            return rows;
        }
        catch (error) {
            console.error('Error executing query', error);
            return [];
        }
    });
}
exports.getSetChannels = getSetChannels;
// Оновити канали в наборі
// export async function updateSetChannels(): Promise<SetChannels[]> {
//   try {
//     const [rows] = await pool.query<SetChannels[]>(
//       'SELECT * FROM clients_set_channels',
//     );
//     return rows;
//   } catch (error) {
//     console.error('Error executing query', error);
//     return [];
//   }
// }
