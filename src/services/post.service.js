const { Op } = require('sequelize');
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

const updatedById = async (id, { title, content }) => {
  await BlogPost.update(
      {
        title,
        content,
      },
      { where: { id } },
    );
    const all = await BlogPost.findOne({
      where: { id },
      include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', through: { attributes: [] } },
      ],
  });
  return all;
};

const deletePost = async (id) => {
  const post = await BlogPost.destroy(
    { where: { id } },
  );
  return post;
};

const searchPosts = (q) => BlogPost.findAll({
  where: {
    [Op.or]:
      [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
  },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatedById,
  deletePost,
  searchPosts,
};