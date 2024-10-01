import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-[168px] ml-[16px] bg-gray-200 rounded-full h-[6px]">
      <div
        className="bg-[#0F60FF] h-[6px] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
