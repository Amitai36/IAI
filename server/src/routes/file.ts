import { Router } from "express";
import { editFile, getBranch, getFile } from "../controllers/file";

const router = Router();

router.get("/getBranch", getBranch);
router.get("/", getFile);
router.post("/", editFile);

export default router;
