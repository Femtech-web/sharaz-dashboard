import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useStateContext } from '../../contexts/ContextProvider';
import { ordersGrid, ordersData } from "../../data/dummy";

const ProductsPage = () => {
    const { currentMode } = useStateContext();

  return (
    <div className='w-full h-[650px] bg-white rounded-xl p-6 flex flex-col
    dark:bg-second-dark-bg dark:text-gray-200 shadow-xl'>
       <p className='text-slate-600 font-semibold my-4 text-3xl
        mb-8 dark:text-gray-200'>Orders Page</p>
       <DataGrid
       sx={ currentMode === 'Dark' && {color: "white"}}
       getRowId={(params) => params.OrderID}
       rows={ordersData}
       columns={ordersGrid}
       initialState={{
         pagination: {
           paginationModel: {
             pageSize: 10,
           },
         },
       }}
       pageSizeOptions={[5]}
       checkboxSelection
       disableRowSelectionOnClick
     />
   </div>
  )
}

export default ProductsPage