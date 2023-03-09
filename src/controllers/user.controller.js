const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.createUser(displayName, email, password, image);
  // console.log(user);
  if (user === email) {
    return res.status(409).send({ message: 'User already registered' }); 
  }

  const newUserId = user.dataValues.id;
  const token = jwt.sign({ data: { userId: newUserId } }, secret, jwtConfig);

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

const deleteUser = async (req, res) => {
  const { payload } = req.user;
  const { data } = payload;
  const { userId } = data;
  const user = await userService.getByUserId(userId);
  if (user) {
    await userService.deleteUser(userId);
  res.status(204).end();
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getByUserId,
  deleteUser,
};