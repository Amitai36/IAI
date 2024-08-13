import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./db/mongoose";
import { port } from "./config/index"
import api from "./api";

dotenv.config();
connectDB();
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", api)

app.listen(port, () => {
    console.log("listen to port 3000")
})