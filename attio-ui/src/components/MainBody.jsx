import React from "react";

const MainBody = () => {
  return (
    <>
      <div className="w-150 h-100  justify-center items-center  mt-20 ml-120 mr-120 mb-10 rounded-lg grid grid-row-4 gap-2">
        <div className="flex justify-center">
          <button className="border-1 p-2 rounded-xl text-sm/5 px-8 cursor-pointer border-gray-300 hover:border-gray-700">
            How AI is revolutionizing CRM
          </button>
        </div>

        <div className="flex justify-center ">
          <h1 className="text-7xl font-bold">Customer Relationship Magic.</h1>
        </div>

        <div className="flex justify-center w-90 ">
          <h2 className="text-sm">
            Attio is the AI-native CRM that builds, scales and grows your
            company to the next level.
          </h2>
        </div>

        <div className="flex justify-center px-2 gap-2">
          <button className="border-1 p-2 rounded-xl text-sm/5 px-8 cursor-pointer bg-black text-white hover:bg-gray-900">
            Start for free
          </button>
          <button className="border-1 p-2 rounded-xl border-gray-300 text-sm/5 px-8 cursor-pointer hover:border-gray-700">
            Talk to sales
          </button>
        </div>
      </div>
    </>
  );
};

export default MainBody;
