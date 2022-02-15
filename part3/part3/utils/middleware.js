/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const errorHandler = (error, _req, res, next) => {
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' });
  }
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }
  next(error);
};

module.exports = errorHandler;
