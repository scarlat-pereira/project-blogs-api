const { validatePost } = require('../utils/validations/validatePost');

const middlewareValidatePost = (req, res, next) => {
  const post = req.body;
  const response = validatePost(post);
  // console.log(response.details);
  if (response.error) {
    return res.status(400).json({ message: response.error.message });
  }
  next();
};

module.exports = middlewareValidatePost;