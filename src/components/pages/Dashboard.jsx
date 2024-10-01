import React from "react";
import TotalSales from "../TotalSales";
import TotalProfit from "../TotalProfit";

const Dashboard = () => {
  return (
    <div>
      <div className=" flex ml-6 gap-[10px]">
        <TotalSales />
        <TotalProfit />
      </div>
    </div>
  );
};

export default Dashboard;
