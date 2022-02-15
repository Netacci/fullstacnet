/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
  },
  number: {
    type: String,

    minLength: 8,
    // checks the number entered
    validate: {
      validator(v) {
        return /\d{2}-\d{6}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  date: Date,
});

personSchema.set('toJSON', {
  transform: (document, retunedObject) => {
    retunedObject.id = retunedObject._id.toString();
    delete retunedObject._id;
    delete retunedObject._v;
  },
});
module.exports = mongoose.model('Person', personSchema);
