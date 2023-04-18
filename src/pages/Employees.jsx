import React from 'react';
import { EmployeesPage } from "../components";
import { useStateContext } from '../contexts/ContextProvider';

const Employees = () => {
  const { activeMenu } = useStateContext();
  
  return (
    <div className={`flex flex-col pb-8 ${activeMenu ? 'mt-8 m-6' : 'pt-[75px] m-3'}  mb-0 min-h-screen`}>
      <EmployeesPage />
    </div>
  )
}

export default Employees