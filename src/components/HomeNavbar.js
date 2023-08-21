import React from "react"
import { useDarkMode } from './DarkModeContext'
import feed from '../homeNavbarLogos/feed.svg'
import profile from '../homeNavbarLogos/profile.svg'
import community from '../homeNavbarLogos/community.svg'
import chat from '../homeNavbarLogos/chat.svg'
import { Link } from "react-router-dom"
import '../styling/HomeNavbar.css'


function HomeNavbar() {
    const { darkMode } = useDarkMode();

    return (
        <div className={`main-home-navbar ${darkMode ? 'dark' : 'light'}`}>
            <Link to='/'  className={`home-navbar-logo ${darkMode ? 'dark' : 'light'}`}>
                <div>
                    <img src={feed} height={70}></img>
                    <h4>Feed</h4>
                </div>
            </Link>
            <Link to="/profile" className={`home-navbar-logo ${darkMode ? 'dark' : 'light'}`}>
                <div>
                    <img src={profile} height={70}></img>
                    <h4>Profile</h4>
                </div>
            </Link>
            <Link to="/community" className={`home-navbar-logo ${darkMode ? 'dark' : 'light'}`}>
                <div>
                    <img src={community} height={70}></img>
                    <h4>Community</h4>
                </div>
            </Link>
            <Link className={`home-navbar-logo ${darkMode ? 'dark' : 'light'}`}>
                <div>
                    <img src={chat} height={70}></img>
                    <h4>Chat</h4>
                </div>
            </Link>
        </div>
    )
}

export default HomeNavbar