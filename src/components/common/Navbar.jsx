import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons"; // Import the specific icon
import avatar from "../../assets/avatar-profile.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center  p-6 text-[rem]">
      <div className="text-[24px] font-bold">Dashboard</div>
      <ul className="flex space-x-[24px] items-center">
        <li>
          <div>
            <span className="bg-red-600 text-white font-bold rounded-full h-4 w-4 flex items-center justify-center text-[10px] absolute ml-[15px] top-6">
              4
            </span>
            <FontAwesomeIcon
              className="h-[26px] w-[26px] text-[#4B465C]"
              icon={faBell}
            />
          </div>
        </li>

        <li>
          <img className="h-[38px] w-[38px]" src={avatar} alt="User Avatar" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
