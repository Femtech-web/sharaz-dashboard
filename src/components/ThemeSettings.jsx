import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

import { themeColors } from "../data/dummy";
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentColor, 
    currentMode, setThemeSettings } = useStateContext();

  return (
    <div className='bg-half-transparent 
      fixed nav-item top-0 right-9 w-screen'>
      <div className="float-right h-screen 
        dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
          <div className="flex p-4 ml-4 justify-between items-center">
            <p className="text-xl font-semibold">Settings</p>
            <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: '50%'}}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="flex-col border-t-1 border-color p-4 ml-4">
            <p className="text font-semibold">Theme Options</p>

            <div className="mt-4">
              <input 
                type="radio"
                id='light'
                value='light'
                name='theme'
                className='cursor-pointer'
                onChange={setMode}
                checked={currentMode === 'light'}
              />
              <label 
                htmlFor="light"
                className='cursor-pointer ml-2 text-md'>
                Light
              </label>
            </div>

            <div className="mt-4">
              <input 
                type="radio"
                id='dark'
                value='Dark'
                name='theme'
                className='cursor-pointer'
                onChange={setMode}
                checked={currentMode === 'Dark'}
              />
              <label 
                htmlFor="dark"
                className='cursor-pointer ml-2 text-md'>
                Dark
              </label>
            </div>

          </div>

          <div className="flex-col border-t-1 border-color p-4 ml-4">
            <p className="text font-semibold">Theme Colors</p>
            <div className="flex gap-3">
              {themeColors.map((item, index) => (
                  <div className="flex relative mt-2 gap-5 
                    items-center cursor-pointer">
                      <button
                        type='button'
                        className='h-10 w-10 rounded-full'
                        style={{ backgroundColor: item.color}}
                        onClick={() => setColor(item.color)}
                      >
                        <BsCheck className={`ml-2 text-2xl 
                        text-white ${currentColor === item.color ? 'block' : 'hidden'}`}/>
                      </button>
                    </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default ThemeSettings