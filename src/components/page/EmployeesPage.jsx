import React from 'react';
import { employeesData } from '../../data/dummy';
import { Divider } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';


const Card = ({ Name, Title, HireDate, Country, ReportsTo, EmployeeImage }) => {
  return (
    <div className='white-glassmorphism flex flex-col p-5 cursor-pointer 
     secondAnimation text-gray-600 dark:text-gray-300 shadow-xl'>
      <img src={EmployeeImage} alt="employee" />
      <Divider sx={{marginTop: 2}} />
      <div className='flex justify-between'>
        <p className='mt-2 text-md'>{Name}</p>
        <p className='mt-2 text-md'>{Title}</p>
      </div>
        <p className='mt-2 text-md'>{Country}</p>
        <p className='mt-2 text-md'><span className=''>Hire Date: </span>{HireDate}</p>
    </div>
  )
}


const EmployeesPage = () => {
  const { activeMenu, mobile } = useStateContext();

  return (
    <div  className='bg-white rounded-xl p-5 dark:bg-second-dark-bg mb-6'>
      <p className='text-slate-600 font-semibold my-4 text-3xl mb-8
       dark:text-gray-200'>Employees Page</p>
      <div className={`grid ${mobile ? 'grid-cols-1 gap-6' : activeMenu ? 'grid-cols-3 gap-6' : 'grid-cols-2 gap-4'}
       ${mobile ? 'grid-cols-1 gap-6' : ''} `}>
        {employeesData.slice(0,9).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default EmployeesPage