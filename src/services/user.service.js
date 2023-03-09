const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
  if (user) {
    // console.log(user);
    return email;
  }
  if (!user) {
  const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  }
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getByUserId = async (userId) => {
  const user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
  return user;
};

const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );
  return user;
};

module.exports = {
  createUser,
  getByUserId,
  getAllUsers,
  deleteUser,
};