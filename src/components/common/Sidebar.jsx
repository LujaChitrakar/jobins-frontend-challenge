import React, { useState } from "react";
import shoppingCcart from "../../assets/shopping-cart.png";
import logo from "../../assets/logo.png";
import indent from "../../assets/indent-decrease.png";

const Sidebar = () => {
  const [isOpen, seIsOpen] = useState(true);
  console.log(isOpen);

  const toggleSidebar = () => {
    seIsOpen(!isOpen);
  };
  return (
    <div>
      <aside
        className={`flex flex-col h-screen px-5 py-8 overflow-y-auto bg-white text-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 transition-all duration-300 ease-in dark:border-gray-700 ${
          isOpen ? "w-[260px]" : "w-16"
        }`}
      >
        <div className="flex items-center cursor-pointer">
          <nav>
            <div
              onClick={toggleSidebar}
              className="flex justify-between  items-center pb-[20px]"
            >
              <div
                className={`flex items-center  gap-[10px] ${
                  isOpen ? "w-[194px]" : "w-[40px]"
                }`}
              >
                <img className="h-[24px] w-[28px] " src={logo} alt="logo" />
                {isOpen && <span>JoBins</span>}
              </div>
              <div className="flex items-center ">
                <span className="flex items-center ">
                  {isOpen && <img className="h-[24px] w-[24px]" src={indent} />}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {isOpen && (
                <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                  main menu
                </label>
              )}
              <a className="flex">
                <img src={shoppingCcart} />
                {isOpen && <span>Dashboard</span>}
              </a>
              <a className="flex">
                <img src={shoppingCcart} />
                {isOpen && <span>Dashboard</span>}
              </a>
              <a className="flex">
                <img src={shoppingCcart} />
                {isOpen && <span>Dashboard</span>}
              </a>
              <a className="flex">
                <img src={shoppingCcart} />
                {isOpen && <span>Dashboard</span>}
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
