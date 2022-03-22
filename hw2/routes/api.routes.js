const {Router} = require('express');

const userRouter = require('./user.router');
const loginRouter = require("./login.router");
const signInRouter = require("./signIn.router");
const errorRouter = require("./error.router");

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);
routes.use('/error', errorRouter);

module.exports = routes;