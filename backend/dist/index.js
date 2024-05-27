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
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const userQueries_1 = require("../src/services/database/userQueries");
const channelQueries_1 = require("../src/services/database/channelQueries");
const index_1 = require("../src/services/database/index");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4001;
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userQueries_1.getUsers)();
        console.log(users);
        res.json(users);
    }
    catch (error) {
        res.status(500).send("Error fetching users");
    }
}));
app.get("/table-columns/:tableName", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tableName } = req.params;
    try {
        const columns = yield (0, channelQueries_1.getTableColumns)(tableName);
        res.json(columns);
    }
    catch (error) {
        res.status(500).send("Error fetching table columns");
    }
}));
app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
    (0, index_1.testConnection)();
});
