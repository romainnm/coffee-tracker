import express from "express";
const router = express.Router();
import URL from "../configs/api-urls.config";
import {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
} from "../controllers/coffee.controller";
import { login, register } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

// Auth Routes
const AuthLogin = URL.AUTH.BASE + URL.AUTH.PATHS[0]; // /auth/login
const AuthRegister = URL.AUTH.BASE + URL.AUTH.PATHS[1]; //auth/register

// // Bean Routes
const Coffee = URL.COFFEE.BASE; // /coffee
const CoffeeParamsID = URL.COFFEE.BASE + URL.COFFEE.PARAMS[0]; // /coffee/:id

// Router
router.route(AuthLogin).post(authMiddleware, login);
router.route(AuthRegister).post(register);
router.route(Coffee).get(getAllCoffeeBags).post(createCoffeeBag);
router
    .route(CoffeeParamsID)
    .get(getCoffeeBag)
    .patch(updateCoffeeBag)
    .delete(deleteCoffeeBag);

export default router;
