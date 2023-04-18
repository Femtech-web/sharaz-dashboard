import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { AreaHomeChart } from '../../data/dummy';

const HomePieChart = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className={`rounded-xl m-3 bg-white  ${activeMenu ? 'w-[32%] mt-10' : 'w-[95%] mt-5'}
      flex flex-col justify-center items-center shadow-lg dark:bg-second-dark-bg`}>
        <p className='font-semibold text-slate-600 text-xl py-4  dark:text-gray-200'>Monthly Stats</p>
        <ResponsiveContainer width='100%' height="80%" className={'dark:bg-second-dark-bg'}>
            <PieChart width={230}>
              <defs>
                <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <Pie data={AreaHomeChart} dataKey="sales" nameKey="x" cx="50%" cy="50%" 
                outerRadius={112} fill="url(#colorMonth)" label/>
              <Tooltip />                
            </PieChart>  
        </ResponsiveContainer>   

    </div>
  )
}

export default HomePieChart
