import express from "express";
import { loginController, registerController } from "../controllers/UserController.js";

const router = express.Router()

// REGISTER || POST

router.post('/register',registerController)

// LOGIN || POST

router.post('/login',loginController)

export default router;