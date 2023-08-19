import React from "react"
import { useDarkMode } from './DarkModeContext'
import Intro from './Intro'
import SearchBar from './SearchBar'
import HomeNavbar from './HomeNavbar'
import Feed from './Feed'
import Friends from "./Friends"
import Suggestions from './Suggestions'
import '../styling/ActivityPage.css'
import "../styling/DarkModeToggle.css"

function ActivityPage() {
    const { darkMode } = useDarkMode();

    return (
        <div className={`activity-page ${darkMode ? 'dark' : 'light'}`}>
            <Intro />
            <div className="main-section">
                <div className="main-section1">
                    <SearchBar />
                    <HomeNavbar />
                </div>
                <div className="main-section2"><Feed /></div>
                <div className="main-section3">
                    <Friends />
                    <Suggestions />
                </div>
            </div>
        </div>
    )
}

export default ActivityPage

