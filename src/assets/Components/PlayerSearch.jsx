import React, { use } from "react";
import PlayerTeam from "./PlayerTeam";

const PlayerSearch = ({ playerSearch, teams, image_url, base_url }) => {
  const players = use(playerSearch);

  return (
    <div>
      <div className="p-10 sm:p-20 md:p-10 lg:p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center gap-7">
        {players.map((player) => (
          <PlayerTeam
            key={player.id}
            player={player}
            image_url={image_url}
            teams={teams}
            base_url={base_url}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerSearch;
