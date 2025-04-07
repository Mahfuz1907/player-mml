import React from "react";

const Player = ({ player, image_url }) => {
  return (
    <div>
      <div className="card shadow-sm border-[1px] border-green-600 flex flex-col justify-center items-center gap-5 py-5">
        <div className="card-img-container">
          <img
            src={`${image_url}${player.image}`}
            alt=""
            className="rounded-full w-40 h-40"
          />
        </div>
        <div className="card-title">
          <h1>{player.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Player;
