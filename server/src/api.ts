import express from "express";

import file from "./routes/file"

const app = express();

//when "/file" to to file routing
app.use("/file", file);

export default app;
