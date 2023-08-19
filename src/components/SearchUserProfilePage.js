import React from 'react'
import { useParams } from 'react-router-dom'
import ProfileInitialContainer from './ProfileInitialContainer'
import UserPosts from './UserPosts'
import LikeButton from './LikeButton'
import SearchUserData from '../data/SearchUserData'
import '../styling/UserProfilePage.css'

function UserProfilePage() {
  const { username } = useParams();

  const userData = SearchUserData.find(user => user.username === username);

  return (
    <div className="user-profile-page">
      <ProfileInitialContainer user={userData} />
      <UserPosts posts={userData.posts} />
    </div>
  );
}

export default UserProfilePage;
