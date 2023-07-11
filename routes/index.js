const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { loginUser, createUser } = require('../controllers/users');
const { validateLogin, validateCreateUser } = require('../middlewares/validation');

const NotFoundError = require('../errors/not-found-err');

router.post('/signin', validateLogin, loginUser);
router.post('/signup', validateCreateUser, createUser);

router.use(auth);
router.use('/', userRouter);
router.use('/', movieRouter);

router.all('/*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемая страница не существует'));
});

module.exports = router;