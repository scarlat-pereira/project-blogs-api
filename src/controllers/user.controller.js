const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.createUser(displayName, email, password, image);
  // console.log(response);
  if (response === email) {
    return res.status(409).send({ message: 'User already registered' }); 
  }

  const token = jwt.sign({ email }, secret, jwtConfig);

  res.status(201).send({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  console.log(users);
  return res.status(200).json(users);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getByUserId(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getByUserId,
};