const express = require('express');
const router = express.Router();
const URLS = require('../configs/api-urls');
const { getAllCoffeeBags, createCoffeeBag, getCoffeeBag, updateCoffeeBag, deleteCoffeeBag } = require('../controllers/coffee-controller');
const { login, register } = require('../controllers/auth-controller')

// Auth Routes
const AuthLogin = URLS.AUTH.BASE + URLS.AUTH.PATHS[0]; // /auth/login
const AuthRegister = URLS.AUTH.BASE + URLS.AUTH.PATHS[1]; //auth/register

// Bean Routes
const Coffee = URLS.COFFEE.BASE; // /coffee
const CoffeeParamsID = URLS.COFFEE.BASE + URLS.COFFEE.PARAMS[0]; // /coffee/:id

// Router
router.route(AuthLogin).post(login);
router.route(AuthRegister).post(register);
router.route(Coffee).get(getAllCoffeeBags).post(createCoffeeBag);
router.route(CoffeeParamsID).get(getCoffeeBag).patch(updateCoffeeBag).delete(deleteCoffeeBag);

module.exports = router;