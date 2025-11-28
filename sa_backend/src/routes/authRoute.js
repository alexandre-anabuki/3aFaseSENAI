// Path: src/routes/authRoutes.js

import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { authController } from "../controller/Auth/authController.js"; 
const authRouter = Router();

authRouter.post(
  "/register",
  authController.register
);

authRouter.post(
  "/login",
  authController.login
);

authRouter.post(
  "/auth/logout",
  auth,
  authController.logout
);

authRouter.post(
  "/auth/refresh",
  auth,
  authController.refresh
);

export default authRouter;
