const userRouter = require('express').Router();
const { getCurrentUser, updateProfile } = require('../controllers/users');
const { validateUserProfile } = require('../middlewares/validation');

userRouter.get('/users/me', getCurrentUser);
userRouter.patch('/users/me', validateUserProfile, updateProfile);

module.exports = userRouter;