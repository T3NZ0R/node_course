const {Router} = require('express');

let users = require('../db/users');
let error = require('../db/error');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.get('/', userController.renderUsers);
userRouter.get('/:userId', userController.getUserById);
userRouter.post('/:userId', userController.postUserById);

module.exports = userRouter;