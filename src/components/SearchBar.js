import React, { useState } from 'react'
import { useDarkMode } from './DarkModeContext'
import { Link } from 'react-router-dom';
import AllUsers from '../data/AllUsers'
import '../styling/SearchBar.css'

function SearchBar() {
    const { darkMode } = useDarkMode();

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchTerm(searchText);

        if (searchText.length >= 3) {
            const filteredResults = AllUsers.filter(user =>
                user.username.includes(searchText)
            );
            setSearchResults(filteredResults);
        } else {
            setSearchResults([]);
        }
    };

    const handleClick = (username) => {
        console.log('Clicked:', username);
    };

    return (
        <div className={`search-bar-container ${darkMode ? 'dark' : 'light'}`}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search users..."
            />
            <div className={`search-results ${darkMode ? 'dark' : 'light'}`}>
                {searchResults.map(user => (
                    <div
                        key={user.username}
                        onClick={() => handleClick(user.username)}
                    >
                        <Link to={`/user/${user.profileL}`}  className={`search-result ${darkMode ? 'dark' : 'light'}`}>
                            <div className="profile-image">
                                <img src={user.profilePicture} className="circle-cropped" />
                            </div>
                            <div className="friends-username">
                                <p>{user.username}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )

};

export default SearchBar
