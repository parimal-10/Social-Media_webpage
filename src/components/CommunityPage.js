import React from "react"
import Intro from './Intro'
import SearchBar from './SearchBar'
import HomeNavbar from "./HomeNavbar"
import CommunityFeed from "./CommunityFeed"
import "../styling/CommunityPage.css"

function CommunityPage() {
    return (
        <div className="community-page">
            <Intro />
            <div className="community-main">
                <div className="left-bar">
                    <SearchBar />
                    <HomeNavbar />
                </div>
                <div className="community-section2">
                    <CommunityFeed />
                </div>
                <div className="community-section3"></div>
            </div>
        </div>
    )
}

export default CommunityPage