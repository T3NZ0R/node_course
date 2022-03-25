const {Router} = require('express');

const error = require('../db/error');
const errorController = require('../controllers/error.controller')

const errorRouter = Router();

errorRouter.get('/', errorController.renderError);

module.exports = errorRouter;