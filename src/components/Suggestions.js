import React, { useState, useEffect } from 'react'
import { useDarkMode } from './DarkModeContext'
import { createApi } from "unsplash-js"
import '../styling/Friends.css'


const api = createApi({
    accessKey: 'EtHnSODrHP1fXNr3sPZfnw0MkLTozjAvbOgjwQSBkBo',
});


function Suggestions() {
    const { darkMode } = useDarkMode();

    const [randomPhotos, setRandomPhotos] = useState([]);

    useEffect(() => {
        api.photos
            .getRandom({ count: 5 })
            .then((result) => {
                if (result.response) {
                    setRandomPhotos(result.response);
                }
            })
            .catch((error) => {
                console.log('Failed to fetch random photos', error);
            });
    } , []);


    return (
        <div className={`friends-section  ${darkMode ? 'dark' : 'light'}`}>
            <h3 style={{ fontSize: '25px', marginBottom: '0px', fontWeight: '500', paddingTop: '10px' }}>Suggestions</h3>
            <hr style={{ marginRight: '43%' }}></hr>
            <div>
                {randomPhotos.map(suggestion => (
                    <div key={suggestion.id}>
                        {suggestion.user && (
                            <div  className="each-friend">
                                <div className="profile-image">
                                    <img src={suggestion.user.profile_image.large} className="circle-cropped" />
                                </div>
                                <div className="friends-username">
                                    <p>{suggestion.user.username}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Suggestions