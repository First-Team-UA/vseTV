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
exports.updateSetInfo = exports.addChannelsToSet = exports.moveChannelsToArhiv = exports.getSetChannels = void 0;
const HttpError_1 = __importDefault(require("../../helpers/HttpError"));
const index_1 = __importDefault(require("./index"));
// Взяти всі канали, які є в певному наборі
function getSetChannels(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [rows] = yield index_1.default.query('SELECT * FROM clients_set_channels WHERE set_id = ? AND archived<>1', [id]);
            return rows;
        }
        catch (error) {
            console.error('Error executing query', error);
            return [];
        }
    });
}
exports.getSetChannels = getSetChannels;
// Перенести останній набір в архив (додати каналам в наборі поточну дату оновлення)
function moveChannelsToArhiv(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date(); // Проверить часовую зону(?)
        const lastUpdate = date.toISOString().replace('T', ' ').substring(0, 19);
        try {
            const [result] = yield index_1.default.query('UPDATE clients_set_channels SET last_edited= ?, archived=1 WHERE set_id = ? AND archived=0', [lastUpdate, id]);
            console.log('Rows updated:', result.affectedRows);
        }
        catch (error) {
            console.error('Error executing query', error);
        }
    });
}
exports.moveChannelsToArhiv = moveChannelsToArhiv;
// Додати канали в набір
function addChannelsToSet(channelsData) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield index_1.default.getConnection();
        try {
            // Создание строки запроса с множественными вставками
            const query = `
      INSERT INTO clients_set_channels (set_id, channel, export_id, export_ctag)
      VALUES ${channelsData.map(() => '(?, ?, ?, ?)').join(', ')}
    `;
            console.log(query);
            // Преобразование данных в одномерный массив значений
            const values = channelsData.flatMap(({ set_id, channel, export_id, export_ctag }) => [
                set_id,
                channel,
                export_id,
                export_ctag,
            ]);
            // Выполнение запроса
            yield connection.query(query, values);
            console.log('Data inserted successfully');
        }
        catch (error) {
            const err = new HttpError_1.default(404, 'Not Found');
            throw err;
        }
        finally {
            connection.release();
        }
    });
}
exports.addChannelsToSet = addChannelsToSet;
// Оновити інформацію про набор
function updateSetInfo(channelsData, setId) {
    return __awaiter(this, void 0, void 0, function* () {
        const date = new Date();
        const updated = date.toISOString().replace('T', ' ').substring(0, 19);
        // Беремо тільки id каналів з масиву об'єктів який прийшов
        const channels = channelsData.map((item) => item.channel);
        // Перетворення масива channels у строку для запису в базу
        const channelsString = channels.join(', ');
        try {
            const [result] = yield index_1.default.query('UPDATE clients_sets SET chan_numbers= ?, chan_quantity = ?, updated= ? WHERE id = ?', [channelsString, channels.length, updated, setId]);
            // console.log('SET updated:', result.affectedRows);
        }
        catch (error) {
            const err = new HttpError_1.default(404, 'Not Found');
            throw err;
        }
    });
}
exports.updateSetInfo = updateSetInfo;
