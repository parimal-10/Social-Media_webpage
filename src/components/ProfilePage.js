// I've made the profile of Millie Bobby Brown since she is one of my favourite actress

import React from 'react'
import { useDarkMode } from './DarkModeContext'
import UserPosts from './UserPosts'
import ProfileInitialContainer from './ProfileInitialContainer'
import Intro from './Intro'
import HomeNavbar from './HomeNavbar'
import SearchBar from './SearchBar'
import '../styling/ProfilePage.css'

function ProfilePage() {
    const { darkMode } = useDarkMode();

    return (
        <div className={`profile-page ${darkMode ? 'dark' : 'light'}`}>
            <Intro />
            <div className='profile'>
                <div className='left-bar'>
                    <SearchBar />
                    <HomeNavbar/>
                </div>
                <div className='profile-main-content'>
                    <ProfileInitialContainer />
                    <UserPosts />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;