import React from 'react';
import Button from './Button';

const Persons = ({ person, onClick }) => {
  return (
    <p>
      {person.name} {person.number}
      <Button type='submit' text='Delete' onClick={onClick} />
    </p>
  );
};

export default Persons;
