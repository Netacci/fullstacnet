/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
/* eslint-disable linebreak-style */
require('dotenv').config();

const express = require('express');

const app = express();
const Person = require('./models/person');
const cors = require('cors');

// to display res.body
app.use(express.json());
// use cors middleware to link fe to be
app.use(cors());

app.use(express.static('build'));
// using morgan middleware to log data
const morgan = require('morgan');

// using morgan middleware to get post body data
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

// adding json.stringify converts data to json format instaed of undefined

morgan.token('body', (req) => JSON.stringify(req.body));

app.get('/api/persons', (_req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get('/info', (_req, res) => {
  Person.find({}).then((persons) => {
    res.send(
      `<div>
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
      </div>`
    );
  });
});

app.get('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;
  // const person = persons.find((person) => person.id === id);
  // if (person) {
  //   res.json(person);
  // } else {
  //   res.status(404).end();
  // }
  Person.findById(id)
    .then((person) => {
      res.json(person);
    })
    .catch((error) => {
      next(error);
    });
});

app.delete('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;
  // persons = persons.filter((person) => person.id !== id);
  // res.status(204).end();
  Person.findByIdAndDelete(id)
    // eslint-disable-next-line no-unused-vars
    .then((_person) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

// const generateID = () => {
//   return Math.floor(Math.random() * 100);
// };

app.post('/api/persons', (req, res, next) => {
  const { body } = req;

  const person = new Person({
    name: body.name,
    number: body.number,
    date: new Date(),
  });
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'missing field',
    });
  }
  // else if (body.name === person.name) {
  //   return res.status(400).json({
  //     error: 'name already exists',
  //   });
  // }
  person
    .save()
    .then((savedPerson) => {
      res.json(savedPerson);
    })
    .catch((err) => next(err));
});

const errorHandler = (error, _req, res, next) => {
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted id' });
  }
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT);
