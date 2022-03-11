import React from 'react';
import Note from '../components/Note';

const Notes = ({ notes, toggleImportance, deleteNote }) => {
  return (
    <>
      <div className='flex flex-wrap flex-row'>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
            deleteNote={() => deleteNote(note.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Notes;
