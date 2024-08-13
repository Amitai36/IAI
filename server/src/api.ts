import express from "express";

import file from "./routes/file"

const app = express();

app.use("/file", file);

export default app;
