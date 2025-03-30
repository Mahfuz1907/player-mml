import React from "react";
import Logo from "../../../public/assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="px-12 py-8 bg-green-400 grid grid-cols-6 justify-center items-center gap-5">
        <div className="logo">
          <img
            src={Logo}
            alt=""
            className="w-26 h-26 rounded-lg cursor-pointer"
          />
        </div>
        <div className="cats col-span-3 text-white px-5 py-5 rounded-2xl text-xl uppercase flex flex-row justify-center items-center gap-5 font-bold bg-white">
          <h1 className="bg-green-400 p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-green-400 hover:border-[1px] hover:border-green-400">
            Teams
          </h1>
          <h1 className="bg-green-400 p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-green-400 hover:border-[1px] hover:border-green-400">
            Players
          </h1>
          <h1 className="bg-green-400 p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-green-400 hover:border-[1px] hover:border-green-400">
            Categories
          </h1>
        </div>
        <div className="title col-span-2 text-green-400 px-5 py-5 rounded-2xl text-xl uppercase flex flex-col justify-center items-center gap-5 font-bold bg-white">
          <h1>مشرق مغرب لیگ</h1>
          <h1>Mashriq Maghrib League</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
