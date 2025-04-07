import React from "react";
import PlayerTeamButton from "./PlayerTeamButton";

const PlayerTeam = ({ player, image_url, teams, base_url }) => {
  const TeamSelect = async (team) => {
    fetch(`${base_url}/team/${team}`).then((res) => res.json());

    return (
      <button className="bg-green-400 w-[80%] text-white font-semibold px-3 py-1 rounded-xl cursor-pointer hover:bg-white hover:border-[1px] hover:border-green-400 hover:text-green-400">
        Selected
      </button>
    );
  };

  return (
    <div className="border-[1px] border-green-600 rounded-xl flex flex-col justify-center items-center gap-10 py-7">
      <img
        src={`${image_url}${player.image}`}
        alt=""
        className="rounded-full w-40 h-40"
      />
      <h1 className="text-xl font-bold">{player.name}</h1>
      {player.team == null ? (
        <div className="player-button flex flex-row justify-center items-center gap-3">
          {teams.map((team) => (
            <PlayerTeamButton
              key={team.id}
              team={team}
              player={player}
              base_url={base_url}
              image_url={image_url}
            />
          ))}
        </div>
      ) : (
        TeamSelect(player.team)
      )}
    </div>
  );
};

export default PlayerTeam;
