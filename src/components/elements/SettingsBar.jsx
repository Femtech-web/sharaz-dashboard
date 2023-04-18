import React from 'react';
import { GiSettingsKnobs } from "react-icons/gi";
import { useStateContext } from '../../contexts/ContextProvider';


const btnStyles = (color) => {
    return {backgroundColor: color, 
    borderRadius: "50%"}
}

const SettingsBar = () => {
  const { setThemeSettings, currentColor } = useStateContext();
  return (
    <div className="fixed right-4 bottom-4" 
        style={{zIndex: "1000"}}>
        <button type='button' 
        className='text-3xl p-3 hover:drop-shadow-xl 
        text-white hover:bg-gray-200 
          hover:-translate-y-2 transition-all ease-linear'
        style={btnStyles(currentColor)}
        onClick={() => setThemeSettings(true)}>
            <GiSettingsKnobs />
        </button>
    </div>
  )
}

export default SettingsBar