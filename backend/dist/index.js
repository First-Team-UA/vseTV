"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = __importDefault(require("./helpers/HttpError"));
const auth_1 = __importDefault(require("./routes/auth"));
const channels_1 = __importDefault(require("./routes/channels"));
const clients_1 = __importDefault(require("./routes/clients"));
const index_1 = __importDefault(require("./routes/index"));
const sets_1 = __importDefault(require("./routes/sets"));
const index_2 = require("./services/database/index");
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = require("../swagger.json");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use('/', index_1.default);
app.use('/auth', auth_1.default);
app.use('/clients', clients_1.default);
app.use('/channels', channels_1.default);
app.use('/api/sets', sets_1.default);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use((err, req, res, next) => {
    if (err instanceof HttpError_1.default) {
        res.status(err.status).json({ message: err.message });
    }
    else {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
    (0, index_2.testConnection)();
});
