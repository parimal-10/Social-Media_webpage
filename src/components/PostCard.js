import React, { useState, useEffect } from 'react'
import { useDarkMode } from './DarkModeContext'
import LikeButton from './LikeButton'
import { createApi } from 'unsplash-js'
import '../styling/PostCard.css'

const api = createApi({
  accessKey: 'gJfwv_BombBo_aQZBNYn4usdJ0tgGqDDkl28v_nlzDI',
});

function PostCard() {
  const { darkMode } = useDarkMode();
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMorePosts = () => {
    if (!loadingMore) {
      setLoadingMore(true);

      api.photos.getRandom({ count: 5 })
        .then((result) => {
          if (result.response) {
            setRandomPhotos(prevPhotos => [...prevPhotos, ...result.response]);
            setLoadingMore(false);
          }
        })
        .catch((error) => {
          console.log('Failed to fetch random photos', error);
          setLoadingMore(false);
        });
    }
  };

  useEffect(() => {
    loadMorePosts();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight &&
      randomPhotos.length > 0
    ) {
      setLoadingMore(true);
      setTimeout(() => {
        loadMorePosts();
      }, 3000);
    }
  };

  return (
    <div className={`post-card ${darkMode ? 'dark' : 'light'}`}>
      {randomPhotos.map(photo => (
        <div key={photo.id}>
          {photo.user && (
            <div className="user-info">
              <div className='profile-image'>
                <img src={photo.user.profile_image.large} alt={photo.user.username} className='circle-cropped' />
              </div>
              <div className='home-username'><h4>{photo.user.username}</h4></div>
            </div>
          )}
          <div className="post-images" style={{ marginBottom: '0' }}>
            <img src={photo.urls.raw + "&w=500"} alt={photo.description || ''} />
          </div>
          {photo.description && (
            <p className='post-caption' style={{ marginBottom: '0' }}>
              <strong>{photo.user.username}</strong> {photo.description}
            </p>
          )}
          <div className={`like-dislike ${darkMode ? 'dark' : 'light'}`}>
            <LikeButton likes={photo.likes} />
          </div>
        </div>
      ))}
      {loadingMore && <p className='loading'>Loading more posts...</p>}
    </div>
  );
}

export default PostCard;
