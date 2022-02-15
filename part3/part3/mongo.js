/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const password = process.argv[2];
const url = `mongodb+srv://netty:${password}@cluster0.49wjh.mongodb.net/phonebookDB?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: Number,
  date: Date,
});

const Person = mongoose.model('Person', personSchema);
// this makes name and number as 3rd and 4th argument in the terminal
const name = process.argv[3];
const number = process.argv[4];

const person = new Person({
  name,
  number,
  date: new Date(),
});
if (process.argv.length > 3) {
  person.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
}

if (process.argv.length <= 3) {
  console.log('Phonebook:');
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(`
       ${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
}
