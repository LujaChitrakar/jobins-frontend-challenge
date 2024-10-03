import React from "react";
import sales from "../../assets/business-and-finance.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";

const TotalSales = () => {
  return (
    <div className=" flex justify-between items-center rounded-[16px] bg-white h-[199px] w-[393px]">
      <div>
        <img className="h-[73px] w-[73px] ml-[43px]" src={sales} />
      </div>
      <div className=" border-l  border h-[139px] border-[#DBDADE]"></div>
      <div className="w-[156px] mr-[52px] ">
        <h1 className="text-[18px] -mt-[10px] w-[165px] h-[26px] spacing font-semibold">
          Total Sales & Costs
        </h1>
        <span className="text-[14px] text-[#8B909A]">Last 7 days</span>
        <h1 className=" text-[32px] font-bold mt-[30px]">$350K</h1>
        <div className="mr-[14px]">
          <span className="text-[#1EB564] text-[14px] font-medium mr-[8px]">
            <FontAwesomeIcon icon={faArrowUp} style={{ color: "#1eb564" }} />
            8.56K
          </span>
          <span className="text-[14px] font-medium text-[#8B909A] w-[96px]">
            vs last 7days
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
