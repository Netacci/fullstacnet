import React from 'react';

const Button = ({ type, text, onClick }) => {
  return (
    <>
      <button onClick={onClick} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;
