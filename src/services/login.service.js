const { User } = require('../models');

const hasUser = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

const login = async (email) => {
  const resultHasUser = hasUser(email);
  if (resultHasUser) {
 const user = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });

 return user;
  }
};

module.exports = {
  login,
};