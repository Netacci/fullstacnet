import React from 'react';

const Search = ({ onChange, value }) => {
  return (
    <>
      <div>
        find countries <input onChange={onChange} value={value} type='search' />
      </div>
    </>
  );
};

export default Search;
