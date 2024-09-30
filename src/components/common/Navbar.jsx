import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons"; // Import the specific icon
import avatar from "../../assets/avatar1.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-cyan-600 p-6 text-[rem]">
      <div className="text-[24px] font-bold">Dashboard</div>
      <ul className="flex space-x-[24px] items-center">
        <li>
          <FontAwesomeIcon
            className="h-[26px] w-[26px] text-[#4B465C]"
            icon={faBell}
          />{" "}
          {/* Use the imported icon */}
        </li>
        <li>
          <img className="h-[38px] w-[38px]" src={avatar} alt="User Avatar" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
