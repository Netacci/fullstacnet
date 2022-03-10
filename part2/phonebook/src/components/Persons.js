import React from 'react';
import Btn from './Button';
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const Persons = ({ person, onClick }) => {
  return (
    <Flex mt='3'>
      <Text mr='5'>
        {person.name} {person.number}
      </Text>
      <Btn color='teal' type='submit' text='Delete' onClick={onClick} />
    </Flex>
  );
};

export default Persons;
