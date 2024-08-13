import { Router } from "express";
import { getFile } from "../controllers/file";

const router = Router();
router.get("/",getFile);

export default router;
