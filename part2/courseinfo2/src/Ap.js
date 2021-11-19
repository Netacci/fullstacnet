import React, { useState } from 'react';

const App = (props) => {
  console.log(props);
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState(' ');
  const [showAll, setShowAll] = useState(true);

  const addNote = (e) => {
    e.preventDefault();
    // create a new obj and concat to aarray of objs
    const newNoteObj = {
      id: notes.length + 1,
      content: newNote,

      important: Math.random() < 0.5,
      date: new Date().toISOString(),
    };
    setNotes(notes.concat(newNoteObj));
    setNewNote('');
  };
  console.log(notes);
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
    </div>
  );
};

export default App;