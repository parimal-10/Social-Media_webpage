import React from 'react'
import { useDarkMode } from './DarkModeContext'
import Slider from 'react-slick'
import LikeButton from './LikeButton'
import '../styling/PostCard.css'
import DislikeButton from './DislikeButton'

function PostCard(props) {
  const { darkMode } = useDarkMode();

  const RightArrow = ({ onClick }) => (
    <div className="arrow right" onClick={onClick}>
      &gt;
    </div>
  );

  const LeftArrow = ({ onClick }) => (
    <div className="arrow left" onClick={onClick}>
      &lt;
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />
  };

  return (
    <div className={`post-card ${darkMode ? 'dark' : 'light'}`}>
      <div className="user-info">
        <div className='profile-image'>
          <img src={props.post.user.profilePicture} alt={props.post.user.username} className='circle-cropped' />
        </div>
        <div className='home-username'><h4>{props.post.user.username}</h4></div>
      </div>
      {props.post.images && (
        <div className="post-images">
          <Slider {...settings}>
            {props.post.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Post ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      )}
      <p className='post-caption' style={{marginBottom:'0'}}><strong>{props.post.user.username}</strong> {props.post.content}</p>
      <div className={`like-dislike ${darkMode ? 'dark' : 'light'}`}>
        <LikeButton />
        <DislikeButton />
      </div>
    </div>
  )
}

export default PostCard;
