import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import PlayerByTeams from "./TeamPage";

const Team = ({ team, image_url }) => {
  return (
    <>
      <div className="border-[1px] border-green-600 rounded-xl flex flex-col justify-center items-center gap-10 py-7">
        <img
          src={`${image_url}${team.image}`}
          alt=""
          className="rounded-full w-40 h-40"
        />
        <h1 className="text-xl font-bold cursor-pointer hover:bg-green-400 hover:px-3 hover:py-2 hover:rounded-xl hover:text-white">
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
        </h1>
      </div>
    </>
  );
};

export default Team;
