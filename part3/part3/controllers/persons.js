/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */

const personRouter = require('express').Router();
const Person = require('../models/person');

personRouter.get('/', (_req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

personRouter.get('/info', (_req, res) => {
  Person.find({}).then((persons) => {
    res.send(
      `<div>
          <p>Phonebook has info for ${persons.length} people</p>
          <p>${new Date()}</p>
        </div>`
    );
  });
});
personRouter.get('/:id', (req, res, next) => {
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
personRouter.delete('/:id', (req, res, next) => {
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

personRouter.post('/', (req, res, next) => {
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

module.exports = personRouter;
