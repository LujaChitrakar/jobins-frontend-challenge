import React from "react";
import TotalSales from "../../TotalSales";
import TotalProfit from "../../TotalProfit";
import CountryStatistics from "../../CountryStatistics";
import UserDetails from "../../UserDetails";
import FilterSection from "../../FilterSection";
import TableSection from "../../TableSection";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-header ">
        <TotalSales />
        <TotalProfit />
        <CountryStatistics />
      </div>
      <div className="dashboard-content">
        <UserDetails />
        <FilterSection />
        <TableSection />
      </div>
    </div>
  );
};

export default Dashboard;
