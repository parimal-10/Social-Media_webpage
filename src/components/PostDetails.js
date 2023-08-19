import React from 'react'
import PostCard from './PostCard'
import Comment from './Comment'

const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <PostCard user={post.user} content={post.content} images={post.images} />
      <div className="comments">
        <h3>Comments</h3>
        {post.comments.map((comment, index) => (
          <Comment key={index} username={comment.username} content={comment.content} />
        ))}
      </div>
    </div>
  );
};

export default PostDetails
