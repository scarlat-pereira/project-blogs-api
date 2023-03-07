const postService = require('../services/post.service');

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

module.exports = {
  getPosts,
  getPostById,
};