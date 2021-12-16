import React from 'react';

const Notification = ({ message }) => {
  return (
    <div>
      <p className='notify'>{message}</p>
    </div>
  );
};

export default Notification;
