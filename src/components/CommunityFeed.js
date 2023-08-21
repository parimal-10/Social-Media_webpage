import React from "react"
import CurrentUserData from '../data/CurrentUserData'
import '../styling/CommunityFeed.css'

function CommunityFeed() {
    return (
        <div className="community-grid">
            {CurrentUserData.community.map(group => (
                <div className="community-group" key={group.id_com}>
                    <div className="community-group-background">
                        <img src={group.backgroud}></img>
                    </div>
                    <div className="community-group-profile-picture">
                        <img src={group.profilePicture} className="community-circle-cropped"></img>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommunityFeed