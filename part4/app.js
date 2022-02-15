const config = require('./utils/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const logger = require('./utils/logger');
const blogRouter = require('./controllers/blogs');
app.use(express.json());
app.use('/api/blogs', blogRouter);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to mongoDB');
  })
  .catch((err) => logger.error('problem connecting', err.message));

module.exports = app;
