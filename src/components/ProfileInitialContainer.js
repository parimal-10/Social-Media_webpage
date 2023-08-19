import React from 'react'
import CurrentUserData from '../data/CurrentUserData'
import '../styling/ProfileInitialContainer.css'


function ProfileInitialContainer() {
    return (
        <div className='profile-initial-container'>
            <div className='profile-profile-image'>
                <img src={CurrentUserData.profilePicture} alt={CurrentUserData.username} className='circle-cropped' />
            </div>
            <div className='username-bio'>
                <div><h2 className='username'>{CurrentUserData.username}</h2></div>
                <div><h3 className='bio'>{CurrentUserData.bio}</h3></div>
            </div>
            <div>
                <button className='edit-profile'>
                    Edit Profile
                </button>
            </div>
        </div>
    )
}

export default ProfileInitialContainer