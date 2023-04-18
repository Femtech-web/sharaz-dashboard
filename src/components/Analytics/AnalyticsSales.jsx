import React from 'react'
import { BarChart, ResponsiveContainer, Legend,  XAxis, YAxis, CartesianGrid, Tooltip, Bar  } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { BarSalesChart } from '../../data/dummy';
import Header  from "./Header";


const AnalyticsSales = () => {
    const { activeMenu } = useStateContext();

  return (
    <div className='flex flex-col bg-white rounded-xl p-6 dark:bg-second-dark-bg shadow-xl'>
        <Header title='Total Sales' amount='$423,354'/>
        <div className='w-full h-[400px] mt-12'>
            <ResponsiveContainer width={activeMenu ?'90%' : '100%'} height='100%' 
                className={'dark:bg-second-dark-bg'}>
                <BarChart
                    data={BarSalesChart}
                    margin={activeMenu ? {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    } : {top:0, right: 0, left:0, bottom: 0}}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" type='string' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AnalyticsSales