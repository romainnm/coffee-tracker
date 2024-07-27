import express from "express";
const AuthRouter = express.Router();
import URLs from "../configs/api-urls.config";
import { login, register } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

// Auth Routes
const AuthLogin = URLs.AUTH.PATHS[0]; // /auth/login
const AuthRegister = URLs.AUTH.PATHS[1]; //auth/register

// Router
AuthRouter.route(AuthLogin).post(authMiddleware, login);
AuthRouter.route(AuthRegister).post(register);

export { AuthRouter };
