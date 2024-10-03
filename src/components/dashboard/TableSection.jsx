import React, { useEffect, useState } from "react";
import ordersData from "../data/Orders.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TableSection = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchOrders = async () => {
      setOrders(ordersData.orders);
    };
    fetchOrders();
  }, []);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = orders.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="pb-4">
      <div className="mt-4 pb-[16px] rounded-[16px] w-[1120px] bg-[#FFFFFF]">
        <table className="rounded-[16px]  w-[1120px] h-[415px]">
          <thead className="border-b-[1px] border-[#E9E7FD] items-center">
            <tr className="uppercase text-[13px] text-[#8B909A] font-medium">
              <th className="w-[153.86px] h-[47px] text-left pl-[20px]">ID</th>
              <th className="w-[153.86px] h-[47px] text-left pl-[20px]">
                Customer
              </th>
              <th className="w-[153.86px] h-[47px] text-left pl-[20px]">
                Date
              </th>
              <th className="w-[153.86px] h-[47px] text-left pl-[20px]">
                Total
              </th>
              <th className="w-[153.86px] h-[47px] text-left pl-[20px]">
                Method
              </th>
              <th className="w-[153.86px] h-[47px] text-left pl-[20px]">
                Status
              </th>
              <th className="w-[153.86px] h-[47px] text-left pl-[20px]">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="text-[15px] text-[#23272E]">
            {currentItems.map((data, index) => (
              <tr key={index} className="border-b-[1px] border-[#E9E7FD]">
                <td className="w-[153.86px] h-[47px] text-left pl-[20px]">
                  {data.id}
                </td>
                <td className="w-[153.86px] h-[47px] text-left pl-[20px]">
                  {data.customer}
                </td>
                <td className="w-[153.86px] h-[47px] text-left pl-[20px]">
                  {data.date}
                </td>
                <td className="w-[153.86px] h-[47px] text-left pl-[20px]">
                  {data.total}
                </td>
                <td className="w-[153.86px] h-[47px] text-left pl-[20px]">
                  {data.method}
                </td>
                <td className="w-[153.86px] h-[47px] text-left text-[#FFC600] pl-[20px]">
                  {data.status}
                </td>
                <td className="w-[153.86px] h-[47px] text-left text-[#0F60FF] pl-[20px]">
                  <a className="cursor-pointer">View Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <div className="flex items-center ml-[24px]">
            <label className=" text-gray-700">
              Showing
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="mx-[8px] border border-[#E9E7FD] rounded-[6px] p-1 w-[78px] h-[38px] focus:outline-none"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </label>
            <span className="text-gray-700">of {orders.length}</span>
          </div>

          <div className="flex items-center mr-[20px]">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="mx-[2px] px-3  rounded border items-center  w-[28px] h-[28px] bg-gray-200 disabled:opacity-50 flex justify-center"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ color: "#405c8c" }}
              />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`flex justify-center items-center mx-[2px] w-[28px] h-[28px]  py-1 rounded border ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex justify-center mx-[2px]  py-1 rounded border items-center w-[28px] h-[28px]  bg-gray-200 disabled:opacity-50"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: "#405c8c" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
