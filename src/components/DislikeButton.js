import React, { useState } from 'react'
import { useDarkMode } from './DarkModeContext'
import '../styling/DislikeButton.css'

function DislikeButton() {
  const { darkMode } = useDarkMode();

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className={`dislike-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
      <img src='https://www.freeiconspng.com/thumbs/like-icon-png/like-icon-png-6.png' className={`dislike-icon ${darkMode ? 'dark' : 'light'}`}></img>
      <div className="dislike-count">{likeCount}</div>
    </div>
  );
}

export default DislikeButton
