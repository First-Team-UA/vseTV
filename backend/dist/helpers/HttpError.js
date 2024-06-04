"use strict";
// interface IMessageList {
//    [key:number]: string
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const messageList: IMessageList = {
//     400: "Bad Request",
//     401: "Unauthorized",
//     403: "Forbidden",
//     404: "Not Found",
//     409: "Conflict",
// }
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.name = 'HttpError';
    }
}
exports.default = HttpError;
