import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';
import { Text } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [search, setSearch] = useState('');
  const [notifyMessage, setNotifyMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialData) => {
      setPersons(initialData);
    });
    // axios.get('http://localhost:3001/persons').then((response) => {
    //   setPersons(response.data);
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // creates new object and adds to the array of objects
    const addPerson = {
      name: newName,
      number: newNumber,
    };
    const revName = persons.map((person) => person.name);
    const id = persons
      .map((person) => (person.name === newName ? person.id : null))
      .filter((n) => n != null);

    console.log(id);

    console.log(revName);
    const addNewNumber = {
      name: newName,
      number: newNumber,
    };

    console.log(addNewNumber);

    // eslint-disable-next-line no-unused-expressions
    revName.includes(newName)
      ? window.confirm(
          `${newName} already exists, replace the old number with a new one?`
        )
        ? personService
            .replaceNum(id, addNewNumber)
            .then((numNew) => {
              setPersons(
                persons.map((person) =>
                  person.name !== newName ? person : numNew
                )
              );
              console.log(numNew);
              setName('');
              setNumber('');
              setNotifyMessage(`${addNewNumber.number} was updated`);
              setTimeout(() => {
                setNotifyMessage(null);
              }, 5000);
            })
            .catch((err) => {
              setNotifyMessage(
                `${addNewNumber.name} was already removed from the server`
              );
              setTimeout(() => {
                setNotifyMessage(null);
              }, 5000);
            })
        : null
      : personService
          .create(addPerson)
          .then((newPerson) => {
            setPersons(persons.concat(newPerson));
            setName('');
            setNumber('');
            setNotifyMessage(`Added ${newPerson.name}`);
            setTimeout(() => {
              setNotifyMessage(null);
            }, 5000);
          })
          .catch((err) => {
            console.log(`we don't know add person error`);
          });
  };
  console.log(persons);
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
  const handleDelete = (id, na) => {
    // eslint-disable-next-line no-unused-expressions
    window.confirm(`Delete ${na} from phonebook ?`)
      ? personService.deleteObj(id).then(() => {
          setPersons(
            persons.filter((l) => {
              return l.id !== id;
            })
          );
          setNotifyMessage(`Deleted ${na}`);
          setTimeout(() => {
            setNotifyMessage(null);
          }, 5000);
        })
      : null;
  };

  return (
    <Container backgroundColor='#f8f8f8' boxShadow='2xl' rounded='md'>
      <Text fontSize='3xl' mt='5' pt='6'>
        {' '}
        Phonebook
      </Text>
      {notifyMessage !== null ? <Notification message={notifyMessage} /> : null}
      <Filter onChange={handleSearch} />
      <Text fontSize='2xl' mt='5'>
        Add New
      </Text>

      <PersonForm
        onSubmit={handleSubmit}
        onChangeName={handleChangeName}
        onChangeNumber={handleChangeNumber}
        valueName={newName}
        valueNum={newNumber}
      />
      <Text fontSize='2xl' mt='5'>
        Numbers
      </Text>
      <Box pb='9'>
        {filteredSearch.map((person) => (
          <Persons
            key={person.id}
            person={person}
            onClick={() => handleDelete(person.id, person.name)}
          />
        ))}
      </Box>
    </Container>
  );
};

export default App;
