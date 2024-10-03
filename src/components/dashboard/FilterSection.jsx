import React, { useState } from "react";
import arrowDown from "../../assets/chevron-down.png";
import searchImg from "../../assets/search.png";

const FilterSection = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <form>
      <div className="flex mt-4">
        <div className="flex relative rounded-[6px] mr-[16px]   bg-[#FFFFFF] w-[136px] h-[40px] items-center cursor-pointer">
          <select className="w-full h-full appearance-none  rounded-[6px] bg-[#FFFFFF] text-[15px] text-[#8B909A] pl-4 pr-10 focus:outline-none cursor-pointer">
            <option value="all">Status : All</option>
            <option value="active">Status : Pending</option>
            <option value="inactive">Status : Completed</option>
          </select>
          <div className="pointer-events-none absolute right-6 top-1/2 transform -translate-y-1/2">
            <img
              src={arrowDown}
              className="w-[16px] h-[16px]"
              alt="Dropdown Arrow"
            />
          </div>
        </div>
        <div className="flex justify-center mr-[571px] items-center w-[200px] h-[40px] bg-[#FFFFFF] rounded-[4px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" text-[15px] w-[146px] h-[21px] focus:outline-none"
            placeholder="Search..."
          />
          <img src={searchImg} className="w-[18px] h-[18px]" />
        </div>

        <div className="flex relative rounded-[6px] ml   bg-[#FFFFFF] w-[199px] h-[40px] items-center cursor-pointer">
          <select className="w-full h-full appearance-none  rounded-[6px] bg-[#FFFFFF] text-[15px] text-[#8B909A] pl-4 pr-10 focus:outline-none cursor-pointer">
            <option value="all">Filter by date range</option>
            <option value="active">Filter by status</option>
            <option value="inactive">Filter by amount</option>
          </select>
          <div className="pointer-events-none absolute right-6 top-1/2 transform -translate-y-1/2">
            <img
              src={arrowDown}
              className="w-[16px] h-[16px]"
              alt="Dropdown Arrow"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterSection;
