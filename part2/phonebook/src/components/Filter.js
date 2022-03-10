import React from 'react';

import { Input } from '@chakra-ui/react';

const Filter = ({ onChange }) => {
  return (
    <Input
      mt='5'
      onChange={onChange}
      type='search'
      placeholder='Search Contact'
      width='auto'
    />
  );
};

export default Filter;
