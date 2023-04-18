import React from 'react';
import { AnalyticsSales, ProductOrders, AnalyticsExpenses, TotalIncome } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Analytics = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className={`flex flex-col min-h-screen mb-0 pb-6 ${activeMenu ? 'mt-8 m-6 ': "pt-[75px] m-3 mt-8"}`}>
        <AnalyticsSales />
        <ProductOrders />
        <AnalyticsExpenses />
        <TotalIncome />
    </div>
  )
}

export default Analytics