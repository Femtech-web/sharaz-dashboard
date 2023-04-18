 import React, { createContext, useContext, useState } from "react";

 const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
 }

 const getMode = () => {
    if(localStorage.getItem('themeMode')){
        return localStorage.getItem('themeMode')
    } else{
        return 'light'
    }
}

const getColor = () => {
    if(localStorage.getItem('colorMode')){
        return localStorage.getItem('colorMode')
    } else{
        return '#03C9D7'
    }
}

 const stateContext = createContext();

 export const ContextProvider = ({ children }) => {
    const [ activeMenu, setActiveMenu ] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true})
    };
    const [screenSize, setScreenSize] = useState(null)
    const [mobile, setMobile] = useState(false)
    const [currentColor, setCurrentColor] = useState(getColor());
    const [currentMode, setCurrentMode] = useState(getMode());
    const [themeSettings, setThemeSettings] = useState(false);


    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (e) => {
        setCurrentColor(e);

        localStorage.setItem('colorMode', e);
        setThemeSettings(false);
    }

    return (
        <stateContext.Provider 
            value={{ activeMenu,
                     initialState,
                     setActiveMenu,
                     isClicked,
                     setIsClicked,
                     handleClick,
                     screenSize,
                     setScreenSize,
                     currentColor,
                     currentMode,
                     setColor,
                     setMode,
                     themeSettings,
                     setThemeSettings,
                     mobile,
                     setMobile }}
        >
            {children}
        </stateContext.Provider>
    )
 }

 export const useStateContext = () => useContext(stateContext);
