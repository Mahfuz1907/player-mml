import React, { use } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ headPromise, image_url }) => {
  const head = use(headPromise);
  return (
    <div>
      <nav className="px-4 sm:px-8 md:px-12 py-8 bg-green-400 grid grid-cols-3 lg:grid-cols-6 justify-center items-center gap-5">
        <div className="logo order-1 col-span-1">
          <img
            src={`${image_url}${head.logo}`}
            alt=""
            className="w-26 h-26 rounded-lg cursor-pointer"
          />
        </div>
        <div className="order-3 lg:order-2 cats col-span-3 text-white p-3 sm:p-5 rounded-2xl text-base sm:text-xl uppercase flex flex-wrap flex-row justify-center items-center gap-5 font-bold bg-white">
          <h1 className="bg-green-400 p-2 sm:p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-green-400 hover:border-[1px] hover:border-green-400">
            <Link to={"/teams"}>Teams</Link>
          </h1>
          <h1 className="bg-green-400 p-2 sm:p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-green-400 hover:border-[1px] hover:border-green-400">
            <Link to={"/players"}>Players</Link>
          </h1>
          <h1 className="bg-green-400 p-2 sm:p-3 rounded-2xl cursor-pointer hover:bg-white hover:text-green-400 hover:border-[1px] hover:border-green-400">
            <Link to={"/categories"}>Categories</Link>
          </h1>
        </div>
        <div className="order-2 lg:order-3 title col-span-2 text-center text-green-400 p-2 sm:p-5 rounded-2xl text-lg sm:text-xl uppercase flex flex-col justify-center items-center gap-1 sm:gap-5 font-bold bg-white">
          <h1>مشرق مغرب لیگ</h1>
          <h1>Mashriq Maghrib League</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
