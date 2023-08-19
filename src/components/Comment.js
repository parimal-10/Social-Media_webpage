import React from 'react';

function Comment({ username, content }) {
  return (
    <div className="comment">
      <span>{username}</span>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
