import React, { useState } from 'react';

function CreatePost() {
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = () => {
    // Handle post submission, e.g., sending data to the server
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="Share your thoughts..."
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <button onClick={handlePostSubmit}>Post</button>
    </div>
  );
};

export default CreatePost;
