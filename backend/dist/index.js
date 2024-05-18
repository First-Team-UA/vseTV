import dotenv from "dotenv";
import express from "express";
import { getUsers } from "./services/database";
console.log(getUsers);
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});
app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
