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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSet = exports.SetChannels = void 0;
const setsQueries_1 = require("../../services/database/setsQueries");
const SetChannels = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.SetChannels = SetChannels;
const UpdateSet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        next(error);
    }
});
exports.UpdateSet = UpdateSet;
