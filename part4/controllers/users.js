const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/users');

// usersRouter.post('/', (req, res) => {
//   const { username, name, password } = req.body;

//   const saltRounds = 10;
//   bcrypt.hash(password, saltRounds).then((passwordHash) => {
//     return passwordHash;
//   });

//   const user = new User({
//     username,
//     name,
//     passwordHash,
//   });

//   user.save().then((savedUser) => {
//     res.status(201).json(savedUser);
//   });
// });
usersRouter.post('/', async (req, res) => {
  const { username, name, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({
      error: 'Username must be unique',
    });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

usersRouter.get('/', (req, res) => {
  User.find({})
    .populate('blogs')
    .then((result) => {
      res.json(result);
    });
});

module.exports = usersRouter;
