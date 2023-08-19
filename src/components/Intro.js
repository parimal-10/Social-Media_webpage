import React from 'react'
import { useDarkMode } from './DarkModeContext'
import DarkModeToggle from './DarkModeToggle'
import { Link } from 'react-router-dom'
import logo from '../siteLogo.png'
import '../styling/Intro.css'


function Intro() {
    const { darkMode } = useDarkMode();

    return (
        <div className={`intro  ${darkMode ? 'dark' : 'light'}`}>
            <div className='home-logo'>
                <img src={logo} height={80}></img>
            </div>
            <Link to='/' className={`website-name  ${darkMode ? 'dark' : 'light'}`}>
                <h1>Coconut.</h1>
            </Link>
            <DarkModeToggle />
        </div>
    )
}

export default Intro