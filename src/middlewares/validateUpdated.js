const { validateUpdatedPost } = require('../utils/validations/validateUpdated');

const middlewareValidateUpdated = (req, res, next) => {
  const post = req.body;
  const response = validateUpdatedPost(post);
  if (response.error) {
    return res.status(400).json({ message: response.error.message });
  }
  next();
};

module.exports = middlewareValidateUpdated;