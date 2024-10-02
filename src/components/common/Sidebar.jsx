import React, { useState } from "react";
import indent from "../../assets/indent-decrease.png";
import cart from "../../assets/shopping-cart.png";
import logo from "../../assets/logo.png";
import home from "../../assets/smart-home.png";
import star from "../../assets/star.png";
import plus from "../../assets/circle-plus.png";
import box from "../../assets/box.png";

const Sidebar = () => {
  const [isOpen, seIsOpen] = useState(true);
  console.log(isOpen);

  const toggleSidebar = () => {
    seIsOpen(!isOpen);
  };
  return (
    <div>
      <aside
        className={`flex flex-col h-screen px-5 py-8  bg-white text-white   transition-all duration-300 ease-in dark:border-gray-700 ${
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
                {isOpen && (
                  <span className="text-black text-[22px] font-bold">
                    JoBins
                  </span>
                )}
              </div>
              <div className="flex items-center ">
                <span className="flex items-center ">
                  {isOpen && <img className="h-[24px] w-[24px]" src={indent} />}
                </span>
              </div>
            </div>
            <div className="space-y-[30px] ">
              <div className="space-y-4 items-center text-[#8B909A]">
                {isOpen && (
                  <label className="px-3 text-[11px]  uppercase ">
                    main menu
                  </label>
                )}
                <div className="space-y-[8px] transition-all duration-300 ease-in-out">
                  <a className=" bg-[#F3F4F8] text-[#23272E] font-semibold rounded-[6px] w-[232px] h-[40px]  flex items-center ">
                    <img className=" mr-[8px] w-[22px] h-[22px]" src={home} />
                    {isOpen && <span>Dashboard</span>}
                  </a>
                  <a className=" hover:bg-[#F3F4F8] hover:text-[#23272E] hover:font-semibold rounded-[6px] w-[232px] h-[40px]  flex items-center">
                    <img className="mr-[8px] w-[22px] h-[22px]" src={cart} />
                    {isOpen && <span>Order Management</span>}
                  </a>
                  <a className=" hover:bg-[#F3F4F8] hover:text-[#23272E] hover:font-semibold rounded-[6px] w-[232px] h-[40px]  flex items-center">
                    <img className="  mr-[8px] w-[22px] h-[22px]" src={star} />
                    {isOpen && <span>Brand</span>}
                  </a>
                </div>
              </div>
              <div className="space-y-4 items-center text-[#8B909A]">
                {isOpen && (
                  <label className="px-3 text-[11px]  uppercase ">
                    products
                  </label>
                )}
                <div className="space-y-[8px] transition-all duration-300 ease-in-out">
                  <a className=" hover:bg-[#F3F4F8] hover:text-[#23272E] hover:font-semibold rounded-[6px] w-[232px] h-[40px]  flex items-center">
                    <img className=" mr-[8px] w-[22px] h-[22px]" src={plus} />
                    {isOpen && <span>Add Products</span>}
                  </a>
                  <a className=" hover:bg-[#F3F4F8] ease-out hover:text-[#23272E] hover:font-semibold rounded-[6px] w-[232px] h-[40px]  flex items-center">
                    <img className=" mr-[8px] w-[22px] h-[22px]" src={box} />
                    {isOpen && <span>Products List</span>}
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
