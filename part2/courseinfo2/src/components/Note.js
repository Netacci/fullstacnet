import React from 'react';
import { Icon } from '@iconify/react';

const Note = ({ note, toggleImportance, key, deleteNote }) => {
  return (
    <>
      <div
        className={`block p-6 max-w-sm w-full   bg-white rounded-xl  shadow-md  dark:bg-gray-800 dark:border-gray-700  mt-10 mr-8 pb-14 ${
          note.important ? 'bg-teal-100' : 'bg-white'
        } `}
      >
        <div className='flex mt-10 mr-8 pb-14 justify-between' key={key}>
          <h2 className='font-bold text-xl'> {note.title}</h2>

          <div onClick={toggleImportance} className='cursor-pointer'>
            {!note.important ? (
              <Icon icon='fluent:alert-24-regular' className='text-xl' />
            ) : (
              <Icon
                icon='ic:outline-notification-important'
                className='text-xl'
              />
            )}
          </div>
          <div onClick={deleteNote} className='cursor-pointer'>
            <Icon icon='fluent:delete-20-regular' className='text-xl' />
          </div>
        </div>
        <p> {note.content}</p>
      </div>
    </>
  );
};

export default Note;
