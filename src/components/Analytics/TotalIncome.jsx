import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import Header from './Header';
import { TotalIncomeData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const TotalIncome = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className='flex flex-col bg-white rounded-xl p-6 
         mt-8 dark:bg-second-dark-bg shadow-xl'>
        <Header title='Total Profit' amount='$172,958'/>
        <div className='w-full h-[400px] mt-12'>
            <ResponsiveContainer width={activeMenu ?'90%' : '100%'} height='100%' 
              className={'dark:bg-second-dark-bg'}>
                <PieChart >
                    <Pie data={TotalIncomeData} dataKey="sales" nameKey="month" cx="50%" 
                      cy="50%" outerRadius={activeMenu ? 170 : 120} fill="#8884d8" label/>
                    <Tooltip />                
                </PieChart>  
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default TotalIncome