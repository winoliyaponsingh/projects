import React from "react";

const Navbar = ({ logo }) => {
  return (
    <div>
      <div className=" flex mx-auto justify-around sticky top-0">
        <div className="container  w-auto h-16 flex items-center justify-center px-10">
          <img src={logo} alt="logo" className="h-13 w-38" />
        </div>

        <div className=" flex justify-center">
          <button className="cursor-pointer h-10 w-auto px-5 pt-5">
            Platfrom
          </button>
          <button className="cursor-pointer h-10 w-auto px-5 pt-5">
            Resources
          </button>
          <button className="cursor-pointer h-10 w-auto px-5 pt-5">
            Customers
          </button>
          <button className="cursor-pointer h-10 w-auto px-5 pt-5">
            Pricing
          </button>
        </div>

        <div className=" w-auto p-5 pt-3.5 h-16 grid grid-cols-2">
          <button className="cursor-pointer w-20 h-8  border-solid border-1 border-gray-300 rounded-lg hover:border-gray-700 ease-in-out transition">
            Sign in
          </button>
          <button
            className="cursor-pointer w-40 h-8 bg-black text-white font-medium border-solid border-1 rounded-lg 
            transition duration-500 ease-in-out hover:translate-0.5  hover:scale-105 "
          >
            Start for free
          </button>
        </div>
      </div>

      <hr className="bg-gray-200 w-full h-0.5 border-0"></hr>
    </div>
  );
};

export default Navbar;
