const express = require('express');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/validateJWT');
const middlewareValidatePost = require('../middlewares/validatePost');

const routerPost = express.Router();

routerPost.post('/', auth, middlewareValidatePost, postController.createPostBlog);
routerPost.get('/', auth, postController.getPosts);
routerPost.get('/:id', auth, postController.getPostById);

module.exports = routerPost;