import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateNote from './components/CreateNote';

// import Note from './components/Note';
import Notes from './components/Notes';
import SideNav from './components/SideNav';
import noteService from './services/note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState(' ');
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    noteService.getAll().then((res) => {
      setNotes(res.data);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    // create a new obj and concat to aarray of objs
    const newNoteObj = {
      content: newNote,

      important: Math.random() > 0.5,
      date: new Date().toISOString(),
    };
    noteService.create(newNoteObj).then((res) => {
      setNotes(notes.concat(newNoteObj));
      setNewNote('');
    });
  };

  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((res) => {
      setNotes(notes.map((note) => (note.id !== id ? note : res.data)));
    });
  };
  const handleDelete = (id) => {
    noteService.deleteNote(id).then((res) => {
      setNotes(notes.filter((note) => note.id !== id));
    });
  };

  return (
    <>
      <SideNav />

      <div className='pl-80 mt-24'>
        <div>
          <button
            className='border border-rose-400 border-2 py-2 px-4 rounded-xl text-rose-400'
            onClick={() => setShowAll(!showAll)}
          >
            Show {showAll ? 'Important' : 'all'}
          </button>
        </div>
        <Routes>
          <Route
            path='/allnotes'
            element={
              <Notes
                notes={notesToShow}
                toggleImportance={toggleImportanceOf}
                deleteNote={handleDelete}
              />
            }
          />
          <Route
            path='/add-note'
            element={
              <CreateNote
                handleSubmit={addNote}
                handleChange={handleNoteChange}
                newNote={newNote}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
