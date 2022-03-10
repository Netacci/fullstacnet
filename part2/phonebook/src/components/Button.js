import React from 'react';
import { Button } from '@chakra-ui/react';

const Btn = ({ type, text, onClick, color }) => {
  return (
    <>
      <Button colorScheme={color} onClick={onClick} type={type}>
        {text}
      </Button>
    </>
  );
};

export default Btn;
