import React from 'react';
import { TopBoard, HomeChart, HomePieChart, NewCustomers, Transactions } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Home = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className={`flex flex-col justify-center mb-0 min-h-screen ${activeMenu ? " pt-4 m-6" : "pt-[75px] m-2"}`}>
      <div className='flex flex-col justify-center'>
        <TopBoard />
        <div className={`flex ${!activeMenu && 'flex-col'}`}>
          <HomeChart />
          <HomePieChart />
        </div>
        <div className={`flex  p-3 ${activeMenu ?"flex-row items-center mt-8" : 'flex-col items-start mt-3'}`}>
            <NewCustomers />
            <Transactions />
        </div>
      </div>
    </div>
  )
}

export default Home