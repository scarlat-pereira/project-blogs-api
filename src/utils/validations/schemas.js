const Joi = require('joi');

const message = 'message required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': message,
    'string.empty': message,
  }),
  password: Joi.string().min(6).required(),
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'any.required': '{#label} is required',
    'string.min': '{#label} length must be at least {#limit} characters long',
    'string.email': '{#label} must be a valid email',
  }),
  image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '{#label} is required',
  }),
});

const checkPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
  }).messages({
    'any.required': message,
    'string.empty': message,
});

const updatedSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).messages({
  'any.required': message,
  'string.empty': message,
});

module.exports = {
  loginSchema,
  userSchema,
  categorySchema,
  checkPostSchema,
  updatedSchema,
};