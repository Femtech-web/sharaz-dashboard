import React, { useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel, MdSpaceDashboard } from "react-icons/md";
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useStateContext } from '../../contexts/ContextProvider';

import { links } from "../../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor,
  currentMode, initialState, setIsClicked } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
        setActiveMenu(false); 
        setIsClicked(initialState);
    } 
  }

  const activeLink = `flex items-center gap-5 
  pl-4 pt-3 pb-2.5 rounded-lg text-white m-2 text-md`;

  const normalLink = `flex items-center gap-5 
  pl-4 pt-3 pb-2.5 rounded-lg hover:bg-gray-200 m-2 
  dark:text-gray-200 text-md text-gray-700 dark:hover:text-black `;


  return (
    <div className='ml-3 h-screen overflow-hidden  
      md:hover:overflow-auto pb-10 relative'>
        {
          activeMenu && 
          (<div className='flex justify-between items-center'>
            <Link to="/" 
             onClick={handleCloseSidebar}
            className='items-center gap-3 
            ml-3 mt-4 flex text-xl font-extrabold 
            dark:text-white text-slate-900 tracking-tight'>
              <MdSpaceDashboard /> <span>Sharaz</span>
            </Link>
              <button type='button'
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-xl p-3 md:hidden 
              rounded-full mt-4 block hover:bg-light-gray">
                <MdOutlineCancel />
              </button>
          </div>)}
          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className="mt-4 m-3 uppercase text-gray-400">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                  to={link.name === 'Home' ? '/' :`/${link.name}`}
                  key={link.name}
                  onClick={() => handleCloseSidebar()}
                  style= {({ isActive }) => ({ backgroundColor: isActive ? currentColor: ''})}
                  className={({ isActive }) => link.name === 'Home' && currentMode === 'Dark' ? 
                    activeLink : isActive ? activeLink : normalLink}
                  >
                    {link.icon}
                    <span>{link.name}</span> 
                  </NavLink>
                ))}
              </div>
            ))}
          </div>

          <div className='absolute flex justify-center ml-5 
            items-center left-4 bottom-6 cursor-pointer dark:text-gray-200'>
            <AiOutlinePoweroff className='mr-3 dark'/>
            <span className='font-semibold '>Logout</span>
          </div>
    </div>
  )
}

export default Sidebar