/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */

/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// using morgan middleware to log data
const morgan = require('morgan');
const config = require('./utils/config');
const logger = require('./utils/logger');
const errorHandler = require('./utils/middleware');
const personRouter = require('./controllers/persons');

const app = express();
// to display res.body
app.use(express.json());
// use cors middleware to link fe to be
app.use(cors());
app.use('/api/persons', personRouter);
app.use(express.static('build'));

// using morgan middleware to get post body data
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);
// adding json.stringify converts data to json format instaed of undefined
morgan.token('body', (req) => JSON.stringify(req.body));

mongoose
  .connect(config.MONGODB_URI)
  .then((_result) => {
    logger.info('connected to mongodb');
  })
  .catch((err) => {
    logger.error('error connecting to mongoDB', err.message);
  });

app.use(errorHandler);

module.exports = app;
