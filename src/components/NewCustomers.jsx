import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { customersData } from '../data/dummy';


const Customers = ({ CustomerImage, CustomerName, Status, StatusBg}) => {
    return (
        <div className='rounded-md p-3 flex items-center 
            justify-between bg-slate-100 my-2 cursor-pointer dark:bg-second-dark-bg'>
            <div className='flex justify-evenly items-center'>
                <div className='flex justify-center items-center mr-5
                  border-gray-300 border-4 rounded-full w-12 h-12'>
                    <img src={CustomerImage} alt="" className=' rounded-full ' />
                </div>
                <p className='text-left mr-8 text-md dark:text-gray-200'>{CustomerName}</p>
            </div>
            <div className={`flex hover:opacity-50 justify-center dark:bg-slate-700
                items-center bg-blue-100 rounded-md p-2`}>
                <button className={`px-1 text-black dark:text-gray-200`}>{Status}</button>
            </div>
        </div>
    )
}


const NewCustomers = () => {
    const { activeMenu } = useStateContext();
    
  return (
    <div className={`flex flex-col bg-white rounded-xl p-6 
        justify-center ${activeMenu ? 'w-[40%]' : 'w-[100%] overflow-x-auto'} 
        drop-shadow-xl dark:bg-second-dark-bg`}>
        <p className='font-semibold text-2xl text-slate-600 mb-4 
         dark:text-gray-200'>New Customers</p>
        <div>
            {customersData.slice(0, 9).map((data, index) => (
            <Customers key={index} {...data}/>
            ))}
        </div>
    </div>
  )
}

export default NewCustomers