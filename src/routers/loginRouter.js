const express = require('express');
const userController = require('../controllers/user.controller');
const { validateLoginBody } = require('../utils/middlewares');

const routerLogin = express.Router();

routerLogin.post('/', validateLoginBody, userController.login);

module.exports = routerLogin;