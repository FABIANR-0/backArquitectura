import { Router } from "express";
import { verifyToken } from "./auth.middleware.js";

const router = Router();

router.use("/product",verifyToken)

export default router;