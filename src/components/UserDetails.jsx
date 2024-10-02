import React from "react";
import Avatar from "../assets/Avatar.png";

const UserDetails = () => {
  return (
    <div className="flex flex-col justify-evenly items-start rounded-[16px] bg-white w-[1120px] h-[221px] p-4 ">
      <div className="flex gap-[80px]">
        <div className="flex items-center  ">
          <img
            className="h-[72px] w-[72px] ml-[40px] rounded-full"
            src={Avatar}
            alt="Avatar"
          />
          <div className="flex flex-col ml-4">
            <h1 className="font-semibold text-[18px]">Robert Fox</h1>
            <span className="text-[15px] text-[#8B909A]">robert@gmail.com</span>
          </div>
        </div>
        <div className=" border-l ml-[10px]  h-[139px] border-[#DBDADE]"></div>

        <div className="flex flex-col -ml-[50px]">
          <h1 className=" mb-[10px] uppercase text-[13px] text-[#8B909A] font-medium">
            personal information
          </h1>
          <div className="flex mt-2 text-[#23272E] font-se">
            <div className="w-[120px] text-[13px] text-[#23272E]">
              <h4 className="mb-[14px]">Contact Number</h4>
              <h4 className="mb-[16px]">Date of Birth</h4>
              <h4>Member Since</h4>
            </div>
            <div className="w-[116px] text-[13px] text-[#23272E] font-semibold">
              <h4 className="mb-[16px]">(201) 555-0124</h4>
              <h4 className="mb-[16px]">1 Jan, 1985</h4>
              <h4>3 March, 2023</h4>
            </div>
          </div>
        </div>

        <div className=" border-l  h-[139px] border-[#DBDADE]"></div>

        <div className="-ml-[50px]">
          <h1 className="uppercase text-[13px] text-[#8B909A] font-medium">
            shipping address
          </h1>
          <div className="flex flex-col mt-2 w-[308px] ">
            <h4 className="text-[13px]">
              3517 W. Gray St. Utica, Pennsylvania 57867
            </h4>
            <div className="flex mt-[26px]">
              <div>
                <h1 className="text-[24px] font-bold">150</h1>
                <span className="text-[13px] font-medium text-[#8B909A]">
                  Total Order
                </span>
              </div>
              <div className="ml-[24px]">
                <h1 className="text-[24px] font-bold">140</h1>
                <span className="text-[13px] font-medium text-[#8B909A]">
                  Completed
                </span>
              </div>
              <div className="ml-[24px]">
                <h1 className="text-[24px] font-bold">10</h1>
                <span className="text-[13px] font-medium text-[#8B909A]">
                  Canceled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex text-[15px]  gap-[24px] ml-[32px] text-[#8B909A]">
        <h1 className="text-[#0F60FF] ">All Orders</h1>
        <h1 className="">Completed</h1>
        <h1 className="">Canceled</h1>
      </div>
      <div className="border-b border-[1px] absolute ml-[16px] mt-[220px] border-[#0F60FF] w-[100px]"></div>
    </div>
  );
};

export default UserDetails;
