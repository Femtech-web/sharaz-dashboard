import React, { useEffect } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft, BsSearch } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import  { Chat, Notification, UserProfile } from "..";
import avatar from "../../data/avatar.jpg";
import { useStateContext } from "../../contexts/ContextProvider";

const NavButton = ({ icon, color, customFunc, dotColor, hide }) => {

  return (
        <button type='button'
          onClick={() => customFunc()}
          style={{ color }}
          className={`relative p-3 rounded-full
          text-xl hover:bg-gray-200`}
        >
          <span style={{ background: dotColor}}
          className="absolute inline-flex 
          h-2 w-2 rounded-full right-2 top-2"
          />
          {icon}
        </button>
  )
}

const Navbar = () => {
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

const { setActiveMenu, activeMenu,  screenSize, mobile, setMobile,
setScreenSize, handleClick, isClicked, currentColor } = useStateContext();

    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      if(screenSize <= 900){
        setActiveMenu(false);
      } else{
        setActiveMenu(true);
      }
    }, [screenSize])

    useEffect(() => {
      if(screenSize <= 480){
        setMobile(true);
      } else{
        setMobile(false);
      }
    }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative '>
      <div className='flex justify-center items-center'>
        {!activeMenu && <NavButton title="Menu" 
         customFunc={handleActiveMenu}
         color={currentColor} 
         icon={<AiOutlineMenu />}
        />}
        <span><BsSearch className='translate-x-6 cursor-pointer dark:text-gray-200'/></span>
        <input type="text" className='outline-none bg-gray-100 dark:bg-second-dark-bg
        pl-8 px-3 py-2 rounded-md dark:text-white' placeholder='search Anything...' />
      </div>

      <div className="flex">
       {!mobile && <NavButton
        dotColor={currentColor} 
        color= {currentColor} 
        title="Chat"
        customFunc={() => handleClick("chat")} 
        icon={<BsChatLeft />}
        />}

        {!mobile && <NavButton
        dotColor={currentColor} 
        color= {currentColor} 
        title="notifications"
        customFunc={() => handleClick("notification")} 
        icon={<RiNotification3Line />}
        />}

          <div className='flex items-center p-1 rounded-full 
            hover:bg-light-gray gap-2 cursor-pointer'
            onClick={() => handleClick("userProfile")}>
              <img src={avatar} 
              alt="userProfile" 
              className='rounded-full w-8 h-8'
              />
             {activeMenu && <p> 
                <span className='text-gray-400 text-14'>Hi</span> {' '} 
                <span className='text-gray-400 font-bold ml-3 text-14'>Femi</span>
              </p>}
              <MdKeyboardArrowDown 
                className='text-gray-400 text-14'
              />
          </div>
        
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar