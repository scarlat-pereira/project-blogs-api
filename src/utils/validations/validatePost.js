const { checkPostSchema } = require('./schemas');

const validatePost = (post) => {
  const validation = checkPostSchema.validate(post);
  return validation;
};

module.exports = {
  validatePost,
};