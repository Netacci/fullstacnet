import React from 'react';

import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const PersonForm = ({
  onSubmit,
  onChangeName,
  onChangeNumber,
  valueName,
  valueNum,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Flex mt='7'>
        <Text mr='8'> Name:</Text>
        <Input
          onChange={onChangeName}
          value={valueName}
          width='auto'
          placeholder='Enter Name'
        />
      </Flex>
      <Flex mt='7'>
        <Text mr='4'> Number:</Text>

        <Input
          onChange={onChangeNumber}
          value={valueNum}
          width='auto'
          placeholder='Enter Number'
        />
      </Flex>

      <Button colorScheme='teal' type='submit'>
        Add
      </Button>
    </form>
  );
};

export default PersonForm;
