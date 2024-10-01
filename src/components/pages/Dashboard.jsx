import React from "react";
import TotalSales from "../TotalSales";
import TotalProfit from "../TotalProfit";
import CountryStatistics from "../CountryStatistics";

const Dashboard = () => {
  return (
    <div>
      <div className=" flex ml-6 gap-[12px]">
        <TotalSales />
        <TotalProfit />
        <CountryStatistics />
      </div>
    </div>
  );
};

export default Dashboard;
