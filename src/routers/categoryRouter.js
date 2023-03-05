const express = require('express');
const categoryController = require('../controllers/category.controller');
const auth = require('../middlewares/validateJWT');
const middlewareValidateCategory = require('../middlewares/validationCategory');

const routerCategory = express.Router();

routerCategory
.post('/', auth, middlewareValidateCategory, categoryController.createCategory);

module.exports = routerCategory;