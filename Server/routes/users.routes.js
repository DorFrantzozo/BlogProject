import express from "express";
import {
  createUser,
  loginUser,
  authenticateToken,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", authenticateToken, createUser);

router.post("/signin", authenticateToken, loginUser);

export default router;
