import React from "react";
import ProgressBar from "./ProgressBar";
import UsFlag from "../../assets/us.png";
import BrazilFlag from "../../assets/brazil.png";
import AusFlag from "../../assets/aus.png";
import arrowUp from "../../assets/arrow-up.png";
import arrowDown from "../../assets/arrow-down.png";

const CountryStatistics = () => {
  const countries = [
    {
      country_name: "United States",
      country_Img_name: UsFlag,
      country_value: "30K",
      progress: 50,
      percentage: "25.8%",
      arrow: arrowUp,
      text: "#28C76F",
    },
    {
      country_name: "Brazil",
      country_Img_name: BrazilFlag,
      country_value: "26K",
      progress: 25,
      percentage: "16.2%",
      arrow: arrowDown,
      text: "#EA5455",
    },
    {
      country_name: "Australia",
      country_Img_name: AusFlag,
      country_value: "17K",
      progress: 15,
      percentage: "11.9%",
      arrow: arrowDown,
      text: "#EA5455",
    },
  ];
  return (
    <div className="  flex flex-col justify-between  rounded-[16px] bg-white w-[454px] h-[199px] ">
      <div className="mt-[25px] space-y-[16px] ">
        {countries.map((data, index) => (
          <div
            key={index}
            className="flex items-center ml-[24px] w-[404px] h-[41px] "
          >
            <img
              className="h-[34px] w-[34px] rounded-full"
              src={data.country_Img_name}
              alt=""
            />
            <div className="ml-[16px] flex flex-col w-[80px]">
              <h2 className="text-[15px] font-semibold ">
                {data.country_value}
              </h2>
              <span className="text-[13px] w-[83px] text-[#8B909A]">
                {data.country_name}
              </span>
            </div>
            <ProgressBar progress={data.progress} />
            <div className="flex ml-[16px]">
              <img className="h-[20px] w-[20px]" src={data.arrow} />
              <span
                className=" text-[15px] font-semibold"
                style={{ color: data.text }}
              >
                {data.percentage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryStatistics;
