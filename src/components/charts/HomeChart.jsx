import React from 'react';
import { AreaChart, ResponsiveContainer, Legend,  
XAxis, YAxis, CartesianGrid, Tooltip, Area  } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { AreaHomeChart } from '../../data/dummy';

const HomeChart = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className={`rounded-xl m-3 mt-10 bg-white h-[360px] ${activeMenu ? 'w-[65%]' : ''}
      flex flex-col justify-center items-center shadow-lg dark:bg-second-dark-bg`}>
      <p className='font-semibold text-slate-600 text-xl my-4 dark:text-gray-200' >Product Analytics</p>
        <ResponsiveContainer width="100%" height='80%' className={'dark:bg-second-dark-bg'}>
            <AreaChart data={AreaHomeChart} fill='#33373E' 
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
             > 
            <defs>
                <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="x" minTickGap={10} tickLine={false} tickSize={2}  />
            <YAxis tickLine={false} minTickGap={10} tickSize={2} />
            <CartesianGrid stroke='3 3'  />
            <Legend />
            <Tooltip />
            <Area type="monotone" dataKey="sales" stroke="#8884d8"  fillOpacity={1} fill="url(#colorMonth)" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default HomeChart
