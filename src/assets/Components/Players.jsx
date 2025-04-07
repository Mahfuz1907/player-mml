import React, { use } from "react";
import Player from "./Player";
import { Link } from "react-router-dom";

const Players = ({ playersPromise, image_url }) => {
  const players = use(playersPromise);
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
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            image_url={image_url}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
