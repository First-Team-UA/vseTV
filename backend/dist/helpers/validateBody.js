"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_js_1 = __importDefault(require("./HttpError.js"));
const validateBody = (schema) => {
    const func = (req, _, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const err = new HttpError_js_1.default(400, error.message);
            next(err);
        }
        next();
    };
    return func;
};
exports.default = validateBody;
