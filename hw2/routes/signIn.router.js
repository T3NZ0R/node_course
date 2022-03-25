const {Router} = require('express');

const SignInController = require('../controllers/signIn.controller');
const SignInMiddleware = require('../middlewares/signIn.middleware');


const signInRouter = Router();

signInRouter.get('/',  SignInController.getSignIn);
signInRouter.post('/', SignInMiddleware.isEmailAvailable, SignInMiddleware.isUserValid, SignInController.postSignIn);

module.exports = signInRouter;