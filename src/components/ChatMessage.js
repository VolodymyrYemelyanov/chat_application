import React from 'react';
import './ChatMessage.css';

export default ({ name, message }) => {
  return (
    <div>
      <p className='chatText'>
        <span className='userName'>{name}</span>
        <em>{message}</em>
      </p>
    </div>
  );
};
