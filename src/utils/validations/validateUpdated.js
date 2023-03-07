const { updatedSchema } = require('./schemas');

const validateUpdatedPost = (updated) => {
  const validation = updatedSchema.validate(updated);
  return validation;
};

module.exports = {
  validateUpdatedPost,
};