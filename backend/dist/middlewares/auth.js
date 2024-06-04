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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HttpError_1 = __importDefault(require("../helpers/HttpError"));
const clientsQueries_1 = require("../services/database/clientsQueries");
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    // чи є хеадер?
    if (typeof authHeader === "undefined") {
        const err = new HttpError_1.default(404, "Not Found");
        next(err);
        return;
    }
    const [bearer, token] = authHeader.split(" ", 2);
    // чи є в заголовку беарер?
    if (bearer !== "Bearer") {
        const err = new HttpError_1.default(401, "Not authorized");
        next(err);
    }
    const secretKey = process.env.JWT_SECRET || '';
    try {
        // чи валідний токен і є юзер в базі?
        const { id } = jsonwebtoken_1.default.verify(token, secretKey);
        const data = yield (0, clientsQueries_1.getClients)();
        const user = data.find(user => user.token === id);
        if (!user) {
            const err = new HttpError_1.default(401, "Not authorized");
            next(err);
        }
        req.user = { id };
        next();
    }
    catch (_a) {
        const err = new HttpError_1.default(401, "Not authorized");
        next(err);
    }
});
exports.default = auth;
