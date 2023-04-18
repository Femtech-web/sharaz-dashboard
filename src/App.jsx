import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider';
import { SettingsBar, Sidebar, Navbar, ThemeSettings } from './components';
import { Home, Analytics, Sales, Customers,
Products, Employees, Message } from './pages';
import './App.css'

function App() {
  const { activeMenu, themeSettings, currentMode } = useStateContext();

  return (
    <div className={ currentMode === "Dark" && 'dark' }>
      <Router>
        <div className='Relative flex dark:bg-main-dark-bg'>
          <SettingsBar />
        </div>
        {activeMenu ? 
          (<div className="w-72 fixed sidebar shadow-xl dark:shadow-2xl dark:bg-second-dark-bg bg-white">
              <Sidebar />
          </div>)
          :
          (<div className='w-0 h-0 dark:bg-second-dark-bg '>
            <Sidebar />
          </div>)} 
          <div className={`dark:bg-main-dark-bg bg-gray-100 min-h-full 
           ${activeMenu ? "md:ml-72": "flex-2"}`}>
            <div className="fixed bg-main-bg navbar md:static w-full top-0 dark:bg-main-dark-bg">
              <Navbar />
            </div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              <Route exact path='/' element={ <Home />}  />
              
              {/* Dashboard */}
              <Route exact path='/Analytics' element={ <Analytics />}  />
              <Route exact path='/Sales' element={ <Analytics />}  />

               {/* pages */}
               <Route exact path='/Customers' element={ <Customers />}  />
              <Route exact path='/Products' element={ <Products />}  />
              <Route exact path='/Employees' element={ <Employees />}  />

               {/* Notification */}
               <Route exact path='/Message' element={ <Message />}  />
            </Routes>
          </div>
      </Router>
    </div>
  )
}

export default App
