import { Router } from "express";
import { editFile, getFile } from "../controllers/file";

const router = Router();
router.get("/", getFile);
router.post("/", editFile);

export default router;
