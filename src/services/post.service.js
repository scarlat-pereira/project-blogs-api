const { BlogPost, User, Category, PostCategory } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const promises = categoryIds.map((id) => Category.findOne({ where: { id } }));
  const resolved = await Promise.all(promises);
   if (resolved.some((e) => e == null)) { 
      return { type: 400, message: 'one or more "categoryIds" not found' };
   }
   
      const newPost = await BlogPost.create({ title, content, userId });
      const result = await categoryIds.map((id) => PostCategory.create({ 
          categoryId: id, 
          postId: newPost.id, 
        }));
      await Promise.all(result);
  return newPost;
};

const getPosts = () => {
  const posts = BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],

  });
  return posts;
};

const getPostById = (id) => {
  const posts = BlogPost.findOne({
    where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],

  });
  return posts;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};