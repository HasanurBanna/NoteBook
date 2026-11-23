import express from "express";
import { authController } from "./auth.controller";

const router = express.Router();

router.post("/register", authController.userRegister);
router.post("/login", authController.userLogin);

export const authRouter = router;
