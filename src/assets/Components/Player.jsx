import React from "react";

const Player = ({ player }) => {
  return (
    <div>
      <div className="card shadow-sm border-[1px] border-green-600 flex flex-col justify-center items-center gap-5 py-5 px-7">
        <div className="card-img-container">
          <img
            src={`https://player-mml-api.onrender.com${player.image}`}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="card-content flex flex-col justify-center items-center gap-8">
          <div className="card-title">
            <h1>{player.name}</h1>
          </div>
          <div className="card-body flex flex-col justify-center items-center gap-3 bg-green-400 rounded-2xl text-white px-3 py-5 font-semibold text-base">
            <h1>Country: {player.team}</h1>
            <h1>Role: {player.role}</h1>
            <h1>Batting: {player.batting_type}</h1>
            <h1>Bowling: {player.bowling_type}</h1>
            <h1>Category: {player.category}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
