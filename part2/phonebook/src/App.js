import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: 7464658, id: 1 },
  ]);
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // creates new object and adds to the array of objects
    const addPerson = {
      name: newName,
      number: Number(newNumber),
      id: persons.length + 1,
    };
    const revName = persons.map((person) => person.name);
    const revNum = persons.map((person) => person.number);
    // checks if a name already exists in the array
    revName.includes(newName)
      ? alert(`${newName} is already in phonebook`)
      : setPersons(persons.concat(addPerson));
    revNum.includes(newNumber)
      ? alert(`${newNumber} is already in phonebook`)
      : setPersons(persons.concat(addPerson));

    setName('');
    setNumber('');
  };
  // sets name state to value of name input
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  // sets number state to value of number input
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  // sets seacrh state to value of input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // checks to see if person array includes search phrase and returns it
  const filteredSearch = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleSearch} />

      <h2>Add new</h2>
      <PersonForm
        onSubmit={handleSubmit}
        onChangeName={handleChangeName}
        onChangeNumber={handleChangeNumber}
        valueName={newName}
        valueNum={newNumber}
      />

      <h2>Numbers</h2>

      {filteredSearch.map((person) => (
        <Persons key={person.id} person={person} />
      ))}
    </div>
  );
};

export default App;
