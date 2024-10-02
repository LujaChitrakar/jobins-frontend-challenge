import React from "react";
import TotalSales from "../TotalSales";
import TotalProfit from "../TotalProfit";
import CountryStatistics from "../CountryStatistics";
import UserDetails from "../UserDetails";
import FilterSection from "../FilterSection";

const Dashboard = () => {
  return (
    <div>
      <div className=" flex ml-6 gap-[14px] mb-4">
        <TotalSales />
        <TotalProfit />
        <CountryStatistics />
      </div>
      <div className="ml-6 ">
        <UserDetails />
        <FilterSection />
      </div>
    </div>
  );
};

export default Dashboard;
