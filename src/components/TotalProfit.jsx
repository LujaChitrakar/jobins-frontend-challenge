import React from "react";
import yen from "../assets/yen.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";

const TotalProfit = () => {
  return (
    <div className=" justify-between  rounded-[16px] bg-white h-[199px] w-[242px]">
      <div className="flex  ml-[24px]">
        <img src={yen} className="h-[43px] w-[43px] mt-[22px] " />
        <div className="ml-[19px] mt-[18px] flex flex-col">
          <h1 className="text-[18px] font-semibold">Total Profit</h1>
          <span className="text-[14px]  text-[#8B909A]">Last 7 days</span>
        </div>
      </div>
      <div className="ml-[24px] mt-[30px]">
        <h1 className="text-[32px] font-bold">50K</h1>
        <div className="mr-[14px]">
          <span className="text-[#1EB564] text-[14px] font-medium mr-[8px]">
            <FontAwesomeIcon icon={faArrowUp} style={{ color: "#1eb564" }} />
            12%
          </span>
          <span className="text-[14px] font-medium text-[#8B909A] w-[84px]">
            vs last 7 days
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalProfit;
