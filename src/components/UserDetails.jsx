import React from "react";
import Avatar from "../assets/Avatar.png";

const UserDetails = () => {
  return (
    <div className="flex flex-col justify-between items-center rounded-[16px] bg-white w-[1120px] h-[221px]">
      <div className="flex ">
        <div className="flex">
          <img
            className="h-[72px] w-[72px] rounded-full"
            src={Avatar}
            alt="Avatar"
          />
          <div>
            <h1>Robert Fox</h1>
            <span>robert@gmail.com</span>
          </div>
        </div>
        <div className=" border-l  border h-[139px] border-[#DBDADE]"></div>
        <div>
          <h1 className="uppercase">personal information</h1>
          <div className="flex gap-10">
            <div>
              <h4>Contact Number</h4>
              <h4>Contact Number</h4>
              <h4>Contact Number</h4>
            </div>
            <div>
              <h4>9869696969</h4>
              <h4>9869696969</h4>
              <h4>9869696969</h4>
            </div>
          </div>
        </div>
        <div className=" border-l  border h-[139px] border-[#DBDADE]"></div>

        <div>
          <div>
            <h1 className="uppercase">shipping address</h1>
            <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
            <div className="flex">
              <div>
                <h1>150</h1>
                <span>Total Order</span>
              </div>
              <div>
                <h1>140</h1>
                <span>Completed</span>
              </div>
              <div>
                <h1>10</h1>
                <span>Canceled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <h1>All Orders</h1>
        <h1>Completed</h1>
        <h1>Canceled</h1>
      </div>
    </div>
  );
};

export default UserDetails;
