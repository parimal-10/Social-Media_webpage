import React from 'react';
import AllUsersPosts from '../data/AllUsersPosts'
import PostCard from './PostCard';

function Feed ({ posts }) {
  const mockPosts = AllUsersPosts.map(item => <PostCard post={item}/>)

  return (
    mockPosts
  );
};

export default Feed
