// const jwt = require('jsonwebtoken');
const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  // console.log(name);
  const newCategory = await categoryService.createCategory(name);
  console.log(newCategory);
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};