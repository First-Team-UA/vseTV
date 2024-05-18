var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dotenv from "dotenv";
import express from "express";
import { getUsers } from "./services/database";
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield getUsers();
    console.log(users);
    res.send("users");
}));
app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
