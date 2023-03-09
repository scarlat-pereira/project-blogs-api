const postService = require('../services/post.service');

const createPostBlog = async (req, res) => {
  const { title, content, categoryIds } = req.body;    
  const { payload } = req.user;
  const { data } = payload;
  const { userId } = data;
  const resolved = await postService.createPost(title, content, categoryIds, userId);
  if (resolved.message) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  return res.status(201).json(resolved);
  };

const getPosts = async (_req, res) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
    const post = await postService.getPostById(id);
    if (post) {
      return res.status(200).json(post);
    }
    return res.status(404).json({ message: 'Post does not exist' });
};

const updatedById = async (req, res) => {
  const { id } = req.params;
  const { payload } = req.user;
  const { title, content } = req.body;
  const { data } = payload;
  const { userId } = data;
  const user = await postService.getPostById(id);
  if (userId !== user.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
  }
  const exemplo = await postService.updatedById(id, { title, content });
  return res.status(200).json(exemplo);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { payload } = req.user;
  const { data } = payload;
  const { userId } = data;
  const user = await postService.getPostById(id);
  if (!user) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  if (userId !== user.user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  await postService.deletePost(id);
  res.status(204).end();
};

module.exports = {
  createPostBlog,
  getPosts,
  getPostById,
  updatedById,
  deletePost,
};