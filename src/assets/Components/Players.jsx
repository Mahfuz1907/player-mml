import React, { use } from "react";
import Player from "./Player";

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  return (
    <>
      <div className="p-10 sm:p-20 md:p-10 lg:p-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-10">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </>
  );
};

export default Players;
