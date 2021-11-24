import React from 'react';
import Button from './Button';

const CountryName = ({ country }) => {
  // if(show.children)
  return (
    <>
      <div>
        <h3>{country.name.common}</h3>
        <Button text='show' />
      </div>
    </>
  );
};

export default CountryName;
