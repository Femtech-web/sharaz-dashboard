import React from 'react';
import { LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import Header from "./Header";
import { OrdersSalesChart } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const ProductOrders = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className='flex flex-col bg-white rounded-xl p-6 
        mt-8 dark:bg-second-dark-bg shadow-xl'>
        <Header title='Orders Review' amount='$150,396'/>
        <div className='w-full h-[400px] mt-12'>
            <ResponsiveContainer width={activeMenu ?'90%' : '100%'} height='100%'   
                className={'dark:bg-second-dark-bg'}>
                <LineChart  data={OrdersSalesChart}
                    margin={activeMenu ? {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    } : {top:0, right: 0, left:0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="orders" stroke="#8884d8" />
                    <Line type="monotone" dataKey="ordersDelivered" stroke="#82ca9d" />
                </LineChart>    
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ProductOrders