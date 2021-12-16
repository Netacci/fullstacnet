import React from 'react';
import Button from './Button';

const PersonForm = ({
  onSubmit,
  onChangeName,
  onChangeNumber,
  valueName,
  valueNum,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input onChange={onChangeName} value={valueName} />
      </div>
      <div>
        number: <input onChange={onChangeNumber} value={valueNum} />
      </div>
      <div>
        <Button type='submit' text='add' />
      </div>
    </form>
  );
};

export default PersonForm;
