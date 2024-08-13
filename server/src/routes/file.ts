import { Router } from "express";
import { editFile, getBranch, getFile } from "../controllers/file";

const router = Router();

router.get("/getBranch/:user_id", getBranch);
router.get("/", getFile);
router.post("/", editFile);

export default router;
