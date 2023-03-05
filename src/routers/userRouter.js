const express = require('express');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/validateJWT');
const middlewareValidateUser = require('../middlewares/validationUser');

const routerUser = express.Router();

routerUser.post('/', middlewareValidateUser, userController.createUser);
routerUser.get('/', auth, userController.getAllUsers);

module.exports = routerUser;