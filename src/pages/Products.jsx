import React from 'react';
import { ProductsPage } from  "../components";
import { useStateContext } from '../contexts/ContextProvider';

const Products = () => {
  const { activeMenu } = useStateContext(); 
  return (
    <div className={`flex flex-col pb-8 ${activeMenu ? 'mt-8 m-6' : 'pt-[75px] m-3'} mb-0 min-h-screen`}>
      <ProductsPage />
    </div>
  )
}

export default Products