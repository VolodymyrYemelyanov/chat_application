import React from 'react';

export default ({ name, message }) => {
  return (
    <div>
      <span>
        <strong>{name}</strong>
      </span>
      <p>
        <em>{message}</em>
      </p>
    </div>
  );
};
