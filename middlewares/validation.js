const { celebrate, Joi } = require('celebrate');
const pattern = require('../utils/constants');

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().regex(RegExp(pattern)).required(),
    trailer: Joi.string().regex(RegExp(pattern)).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().regex(RegExp(pattern)).required(),
    movieId: Joi.number().required(),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
  }),
});

const validateUserProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

module.exports = {
  validateCreateMovie,
  validateLogin,
  validateCreateUser,
  validateMovieId,
  validateUserProfile,
};