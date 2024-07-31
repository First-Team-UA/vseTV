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
exports.setControllers = void 0;
const ctrlWrapper_1 = __importDefault(require("../../helpers/ctrlWrapper"));
const setsQueries_1 = require("../../services/database/setsQueries");
const setChannels = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const setId = parseInt(req.params.setId, 10);
    console.log(setId);
    try {
        const result = yield (0, setsQueries_1.getSetChannels)(setId);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
const updateSet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //  1. Оновлюється таблиця client_set_channels, де для кожного каналу попередньої виборки каналів записується єдина дата оновлення
    // (таким чином ця вибірка каналів та їх налаштувань стає архівною)
    // 2. Оновлюється таблиця client_set_channels, а яку записується нова вибірка каналів і їх налаштувань (тобто ті канали, які клієнт відмітив собі)
    // Треба перебрати масив каналів що додаються, які були обрані (чекбоксами), так для кожного елементу виповнити запити на вставку в таблицю
    // 3. Оновлюється таблиця clients_sets, поле  chan_numbers, куди записується новий масив з переліком id обраних телеканалів
    const setId = parseInt(req.params.setId, 10);
    const newChannels = req.body.newChannels;
    console.log('newchannels:', newChannels);
    console.log(typeof newChannels);
    try {
        // Переносимо канали поточного набору в архів в client_set_channels
        yield (0, setsQueries_1.moveChannelsToArhiv)(setId);
        // Додаємо нові канали в набір в client_set_channels
        yield (0, setsQueries_1.addChannelsToSet)(newChannels);
        // Оновлюємо дані набору в clients_sets
        yield (0, setsQueries_1.updateSetInfo)(newChannels, setId);
        res.json('Updated');
    }
    catch (error) {
        next(error);
    }
});
exports.setControllers = {
    setChannels: (0, ctrlWrapper_1.default)(setChannels),
    updateSet: (0, ctrlWrapper_1.default)(updateSet),
};
