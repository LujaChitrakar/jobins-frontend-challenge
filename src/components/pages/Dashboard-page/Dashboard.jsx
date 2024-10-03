import React from "react";
import TotalSales from "../../dashboard/TotalSales";
import TotalProfit from "../../dashboard/TotalProfit";
import CountryStatistics from "../../dashboard/CountryStatistics";
import UserDetails from "../../dashboard/UserDetails";
import FilterSection from "../../dashboard/FilterSection";
import TableSection from "../../dashboard/TableSection";
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
