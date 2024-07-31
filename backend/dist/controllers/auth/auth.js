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
exports.authCtrl = exports.logOut = void 0;
const HttpError_1 = __importDefault(require("../../helpers/HttpError"));
const JWTHandling_1 = __importDefault(require("../../helpers/JWTHandling"));
const ctrlWrapper_1 = __importDefault(require("../../helpers/ctrlWrapper"));
const hashing_1 = __importDefault(require("../../helpers/hashing"));
//import hashing from '../../helpers/hashing';
const authQueries_1 = require("../../services/database/authQueries");
const logIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, password } = req.body;
    const hashPass = yield hashing_1.default.hashPassword(password, 10);
    const testResult = (yield (0, authQueries_1.getAuth)(login, hashPass));
    const newToken = JWTHandling_1.default.signToken(testResult.id.toString());
    yield (0, authQueries_1.setToken)(newToken, testResult.id);
    try {
        const finalResult = (yield (0, authQueries_1.getAuth)(login, hashPass));
        res.send({ finalResult, status: 200 });
    }
    catch (error) {
        const err = new HttpError_1.default(404, 'Not Found');
        res.send({ error: err.message, status: 404 });
        throw err;
    }
});
const logOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, authQueries_1.logout)(Number(id));
        res.send('LogoutSuccessful');
    }
    catch (error) {
        const err = new HttpError_1.default(404, 'Not Found');
        throw err;
    }
});
exports.logOut = logOut;
exports.authCtrl = {
    logIn: (0, ctrlWrapper_1.default)(logIn),
    logOut: (0, ctrlWrapper_1.default)(exports.logOut),
};
