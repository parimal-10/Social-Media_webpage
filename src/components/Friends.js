import React from "react"
import { useDarkMode } from './DarkModeContext'
import CurrentUserData from "../data/CurrentUserData"
import '../styling/Friends.css'


function Friends() {
    const { darkMode } = useDarkMode();
    const data = 6;

    return (
        <div className={`friends-section  ${darkMode ? 'dark' : 'light'}`}>
            <h3 style={{fontSize:'25px', marginBottom:'0px', fontWeight:'500', paddingTop:'10px'}}>Friends</h3>
            <hr style={{marginRight:'165px'}}></hr>
            <div>
                {CurrentUserData.friends.map((friend) => (
                    friend.id <= data ?
                    <div key={friend.id} className="each-friend">
                        <div className="profile-image">
                            <img src={friend.profiePicture} className="circle-cropped"/>
                        </div>
                        <div className="friends-username">
                            <p>{friend.userName}</p>
                        </div>
                    </div>
                    : null
                ))}
            </div>
        </div>
    )
}

export default Friends