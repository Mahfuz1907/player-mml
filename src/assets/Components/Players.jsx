import React, { use, useEffect, useState } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";

const Players = ({ playersPromise, image_url }) => {
  const players = use(playersPromise);
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(9); // Default value

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(2);
      } else if (width >= 640 && width < 768) {
        setItemsPerPage(4);
      } else if (width >= 768 && width < 1024) {
        setItemsPerPage(6);
      } else if (width >= 1024 && width < 1280) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = players.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(players.length / itemsPerPage);
  return (
    <div className="p-10 sm:p-20 md:p-10 lg:p-20 flex flex-col gap-10">
      <div>
        <Link to={"/"}>
          <button className="bg-green-400 border-[1px] border-green-400 px-5 py-2 text-white hover:text-green-400 text-lg font-semibold rounded-xl cursor-pointer hover:bg-white">
            <i className="fa-solid fa-arrow-left"></i> Home Page
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center gap-7">
        {currentItems.map((player) => (
          <Player
            key={player.id}
            player={player}
            image_url={image_url}
          ></Player>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 border-[1px] ${
            currentPage === 1
              ? "bg-gray-300 border-gray-300"
              : "bg-green-400 border-green-400 hover:bg-white hover:text-green-400 cursor-pointer"
          } text-white rounded`}
        >
          <i class="fa-solid fa-angles-left"></i>
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border-[1px] ${
            currentPage === totalPages
              ? "bg-gray-300 border-gray-300"
              : "bg-green-400 border-green-400 hover:bg-white hover:text-green-400 cursor-pointer"
          } text-white rounded`}
        >
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Players;
