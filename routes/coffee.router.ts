import express from "express";
const CoffeeRouter = express.Router();
import URL from "../configs/api-urls.config";
import {
    getAllCoffeeBags,
    createCoffeeBag,
    getCoffeeBag,
    updateCoffeeBag,
    deleteCoffeeBag,
} from "../controllers/coffee.controller";

// Router
CoffeeRouter.route("/").get(getAllCoffeeBags).post(createCoffeeBag);
CoffeeRouter.route(URL.COFFEE.PARAMS[0]) // /:id
    .get(getCoffeeBag)
    .patch(updateCoffeeBag)
    .delete(deleteCoffeeBag);

export { CoffeeRouter };
