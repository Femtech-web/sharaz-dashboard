import React from 'react';
import Header from './Header';
import { AreaChart, ResponsiveContainer, Legend,  
XAxis, YAxis, CartesianGrid, Tooltip, Area  } from 'recharts';
import { ExpensesChart } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const AnalyticsExpenses = () => {
    const { activeMenu } = useStateContext();
  return (
    <div className='flex flex-col bg-white rounded-xl p-6 
        mt-8 dark:bg-second-dark-bg shadow-xl'>
        <Header title='Expenses' amount='$250,396'/>
        <div className='w-full h-[400px] mt-12'>
            <ResponsiveContainer width={activeMenu ?'90%' : '100%'} height='100%' className={'dark:bg-second-dark-bg'}>
                <AreaChart data={ExpensesChart} fill='#33373E' 
                margin={activeMenu ? {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    } : {top:0, right: 0, left:0, bottom: 0}}
                > 
                <defs>
                    <linearGradient id="colorMonth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="month"  />
                <YAxis  />
                <CartesianGrid stroke='3 3'  />
                <Legend />
                <Tooltip />
                <Area type="monotone" dataKey="expense" stroke="#8884d8"  fillOpacity={1} fill="url(#colorMonth)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AnalyticsExpenses