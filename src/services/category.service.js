const { Category } = require('../models');

const createCategory = async (name) => {
  const nameCategory = await Category.create({ name });
  // console.log(nameCategory);
  return nameCategory;
};

module.exports = {
  createCategory,
};