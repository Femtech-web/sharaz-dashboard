import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ordersData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Transactions = () => {
  const { activeMenu } = useStateContext();
  return (
      <div className={`flex flex-col bg-white rounded-xl p-6 
        justify-center ${activeMenu ? 'w-[60%] ml-6' : 'w-[100%] mt-8 overflow-x-auto'} drop-shadow-2xl dark:bg-second-dark-bg`}>
        <p className='font-semibold text-2xl text-slate-600 mb-4 dark:text-gray-200'>Latest Transactions</p>
        <div className='w-full'>
        <TableContainer>
          <Table sx={{ Width: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell><p className='font-semibold text-md text-left text-slate-600 dark:text-gray-200'>Image</p></TableCell>
                <TableCell align="right"><p className='font-semibold text-md text-center text-slate-600 dark:text-gray-200'>Id</p></TableCell>
                <TableCell align="right"><p className='font-semibold text-md text-center text-slate-600 dark:text-gray-200'>Product Name</p></TableCell>
                <TableCell align="right"><p className='font-semibold text-md text-center text-slate-600 dark:text-gray-200'>Amount</p></TableCell>
                <TableCell align="right"><p className='font-semibold text-md text-center text-slate-600 dark:text-gray-200'>Status</p></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordersData.slice(0, 8).map((row) => (
                <TableRow
                  key={row.OrderID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell   align='center'>
                    <img src={row.ProductImage} alt=""  className='rounded w-[50%] cursor-pointer'/>
                  </TableCell>
                  <TableCell align="center"><p className='dark:text-gray-200'>{row.OrderID}</p></TableCell>
                  <TableCell align="center"><p className='dark:text-gray-200'>{row.OrderItems}</p></TableCell>
                  <TableCell align="center"><p className='dark:text-gray-200'>{row.TotalAmount}</p></TableCell>
                  <TableCell align="center"><p className='bg-blue-100 p-2 hover:opacity-50 cursor-pointer
                    rounded-md dark:bg-slate-700 dark:text-gray-200'>{row.Status}</p></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
  )
}

export default Transactions
