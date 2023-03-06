const { Category } = require('../models');

const createCategory = async (name) => {
  const nameCategory = await Category.create({ name });
  // console.log(nameCategory);
  return nameCategory;
};

const getCategory = async () => {
  const allCategory = await Category.findAll();
  return allCategory;
};

module.exports = {
  createCategory,
  getCategory,
};