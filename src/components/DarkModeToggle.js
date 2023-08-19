import React from 'react';
import { useDarkMode } from './DarkModeContext'; // Import the context

function DarkModeToggle() {
    const { darkMode, toggleDarkMode } = useDarkMode(); // Use the context

    return (
        <button
            className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}
            onClick={toggleDarkMode}
        >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}

export default DarkModeToggle;
