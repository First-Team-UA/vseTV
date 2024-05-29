// interface IMessageList {
//    [key:number]: string
// }

// const messageList: IMessageList = {
//     400: "Bad Request",
//     401: "Unauthorized",
//     403: "Forbidden",
//     404: "Not Found",
//     409: "Conflict",
// }

class HttpError extends Error{
    public status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.name = 'HttpError';
    }
}

export default HttpError;