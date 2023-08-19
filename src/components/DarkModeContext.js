import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function useDarkMode() {
    return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const value = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
}
