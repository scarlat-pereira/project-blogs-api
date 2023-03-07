const express = require('express');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/validateJWT');
// const middlewareValidateUser = require('../middlewares/validationUser');

const routerPost = express.Router();

routerPost.get('/', auth, postController.getPosts);

module.exports = routerPost;