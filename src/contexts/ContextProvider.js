import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    cart: false,
    chat: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);
    }

    const handleClick = (clicked) => {setIsClicked({ ...initialState, [clicked]:"true" })};

    return (
        <StateContext.Provider
            value={{ 
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu,
                isClicked: isClicked,
                setIsClicked: setIsClicked,
                handleClick: handleClick,
                screenSize: screenSize,
                setScreenSize: setScreenSize,
                currentColor: currentColor,
                currentMode: currentMode,
                themeSettings: themeSettings,
                setThemeSettings: setThemeSettings,
                setMode: setMode,
                setColor: setColor,
             }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);