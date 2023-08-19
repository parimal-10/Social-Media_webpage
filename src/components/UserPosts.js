import React from 'react';
import CurrentUserData from '../data/CurrentUserData';
import '../styling/UserPosts.css'

function UserPosts() {
    return (
        <div className="user-posts">
            <h2>Diaries</h2>
            <div className="post-grid">
                {CurrentUserData.posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="post-image">
                            <img src={post.image} alt={post.caption} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPosts;