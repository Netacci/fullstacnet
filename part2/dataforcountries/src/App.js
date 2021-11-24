import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Components/Country';
import Search from './Components/Search';
import CountryName from './Components/CountryName';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  // const [show, setShow] = useState([]);
  // const [count, setCount] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredSearch = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLocaleLowerCase())
  );
  console.log(filteredSearch);

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   setShow(e.target);
  //   console.log(show);
  //   const showCountry = countries.filter(
  //     (country) =>
  //       country.name.common.toLocaleLowerCase() ===
  //       show.firstChild.innerText.toLowerCase()
  //   );
  //   console.log(showCountry);
  //   setCount(showCountry);
  // };

  // if butto

  return (
    <>
      <Search onChange={handleSearch} value={search} />
      {/* {show
        ? count.map((co) => <Country key={co.cca3} country={co} />)
        : 'null'} */}

      {search === '' ? (
        []
      ) : filteredSearch.length > 10 ? (
        <p>Too many searches, specify another filter</p>
      ) : (
        filteredSearch.map((country) =>
          // console.log(country)
          filteredSearch.length <= 10 && filteredSearch.length > 1 ? (
            <CountryName
              key={country.cca3}
              country={country}
              // onSubmit={handleClick}
            />
          ) : (
            <Country key={country.cca3} country={country} />
          )
        )
      )}
    </>
  );
};
export default App;
