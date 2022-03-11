import React from 'react';

const CreateNote = ({ handleSubmit, handleChange, newNote }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleChange} />
        <button type='submit'>save</button>
      </form>
    </>
  );
};

export default CreateNote;
