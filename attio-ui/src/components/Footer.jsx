import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-180 h-10 flex justify-center items-center ml-105 mr-110 rounded-lg gap-2 ">
        <button className="border-1 p-2 rounded-xl border-gray-500 text-sm/5 px-8 cursor-pointer hover:border-gray-700 text-gray-700 font-semibold">
          Data
        </button>

        <button className="border-1 p-2 rounded-xl border-gray-500 text-sm/5 px-8 cursor-pointer hover:border-gray-700 text-gray-700 font-semibold">
          Automation
        </button>

        <button className="border-1 p-2 rounded-xl border-gray-500 text-sm/5 px-8 cursor-pointer hover:border-gray-700 text-gray-700 font-semibold">
          Pipeline
        </button>

        <button className="border-1 p-2 rounded-xl border-gray-500 text-sm/5 px-8 cursor-pointer hover:border-gray-700 text-gray-700 font-semibold">
          Productivity
        </button>

        <button className="border-1 p-2 rounded-xl border-gray-500 text-sm/5 px-8 cursor-pointer hover:border-gray-700 text-gray-700 font-semibold">
          Reporting
        </button>
      </div>
    </>
  );
};

export default Footer;
