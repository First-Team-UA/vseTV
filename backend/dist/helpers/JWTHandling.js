"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HttpError_js_1 = __importDefault(require("./HttpError.js"));
const signToken = (id) => {
    var _a, _b;
    return jsonwebtoken_1.default.sign({ id }, (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : "super-secret", {
        expiresIn: (_b = process.env.JWT_EXPIRES) !== null && _b !== void 0 ? _b : "1d",
    });
};
const checkToken = (token) => {
    var _a;
    if (!token)
        throw new HttpError_js_1.default(401, "Not logged in..");
    try {
        const { id } = jsonwebtoken_1.default.verify(token, (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : "super-secret");
        return id;
    }
    catch (err) {
        throw new HttpError_js_1.default(401, "Not logged in..");
    }
};
exports.default = { checkToken, signToken };
