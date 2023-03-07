const { BlogPost, User, Category } = require('../models');

const getPosts = () => {
  const posts = BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],

  });
  return posts;
};

module.exports = {
  getPosts,
};