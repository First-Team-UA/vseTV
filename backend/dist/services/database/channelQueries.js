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
exports.getChannels = void 0;
const index_1 = __importDefault(require("./index"));
function getChannels() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = `
      SELECT 
        name, 
        name_ua, 
        names_alternative, 
        schedule_language_id, 
        schedule_special_type, 
        region, 
        tiedtoid, 
        description, 
        logo, 
        active 
      FROM channels
    `;
            const [rows] = yield index_1.default.query(query);
            return rows;
        }
        catch (error) {
            console.error("Error fetching channels:", error);
            throw error;
        }
    });
}
exports.getChannels = getChannels;
