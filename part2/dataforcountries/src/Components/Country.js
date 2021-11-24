import React from 'react';

const Country = ({ country }) => {
  const languages = country.languages;

  const language = [];

  for (const lang in languages) {
    language.push(<li key={language.length + 1}>{languages[lang]}</li>);
  }

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Continent: {country.continents}</p>
      <p>Timezone:{country.timezones} </p>
      <h3>Languages</h3>
      <ul>{language}</ul>
      <img src={country.flags.png} alt='' />
    </>
  );
};

export default Country;
