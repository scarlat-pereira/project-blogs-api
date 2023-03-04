const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '15min',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { displayName, email, password } = req.body;
  const response = await userService.createUser(displayName, email, password);

  if (response.type) {
    return res.status(400).send({ message: response.message }); 
  }
  
  const newUserId = response.dataValues.id;

  const token = jwt.sign({ data: { userId: newUserId } }, secret, jwtConfig);

  res.status(201).send({ token });
};

module.exports = {
  createUser,
};