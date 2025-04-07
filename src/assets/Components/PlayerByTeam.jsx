import React from "react";

const PlayerByTeam = ({ player, image_url }) => {
  return (
    <>
      <div className="mx-5 card flex flex-col justify-center items-center gap-5 rounded-2xl shadow-xl mb-5">
        <div className="player-image w-full bg-green-400 rounded-t-2xl flex justify-center items-center py-5">
          <img
            src={`${image_url}${player.image}/`}
            alt=""
            className="rounded-full w-40 h-40"
          />
        </div>

        <div className="card-content px-7 mt-2 mb-5 flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-black text-green-400">{player.name}</h1>

          <div className="card-body bg-green-400 w-full rounded-b-2xl text-white font-semibold text-base flex flex-col justify-center items-center gap-2">
            <h1>Nick Name: {player.short_name}</h1>
            <h1>Category: {player.category}</h1>
            <h1>Country: {player.country}</h1>
            <h1>Role: {player.role}</h1>
            <h1>Batting Type: {player.batting_type}</h1>
            <h1>Bowling Type: {player.bowling_type}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerByTeam;
