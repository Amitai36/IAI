import { Router } from "express";

import { editFile, getFile } from "../controllers/file";

const router = Router();

//get req
router.get("/", getFile);

//get put
router.put("/", editFile);

export default router;
