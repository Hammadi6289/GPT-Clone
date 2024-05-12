import express from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

//routes
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;
