const blogRouter = require('express').Router();
const Blog = require('../models/blogs');
const User = require('../models/users');

blogRouter.get('/', (req, res) => {
  Blog.find({})
    .populate('user', { username: 1, name: 1 })
    .then((blogs) => {
      res.json(blogs);
    });
});

blogRouter.post('/', async (req, res) => {
  const body = req.body;
  const user = await User.findById(body.userId);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  res.json(savedBlog);
});

module.exports = blogRouter;
