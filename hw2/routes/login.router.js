const {Router} = require('express');

const LoginController = require('../controllers/login.controller');
const LoginMiddleware = require('../middlewares/login.middleware');
const {isEmailRegistered} = require("../middlewares/login.middleware");


const loginRouter = Router();

loginRouter.get('/', LoginController.getLogin);
loginRouter.post('/', LoginMiddleware.isDatAvailable, LoginMiddleware.isEmailRegistered, LoginMiddleware.isPasswordValid, LoginController.postLogin);

module.exports = loginRouter;