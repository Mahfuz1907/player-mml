import React, { Suspense } from "react";
import PlayerByTeams from "./PlayerByTeams";
import { Link, useParams } from "react-router-dom";
import TeamInfo from "./TeamInfo";

const TeamPage = ({ base_url, teamPromise, image_url }) => {
  const { id } = useParams();

  const playerByTeamsPromise = fetch(`${base_url}/teams/${id}`).then((res) =>
    res.json()
  );

  const teamHeadingPromise = fetch(`${base_url}/team/${id}`).then((res) =>
    res.json()
  );

  return (
    <div className="px-14 py-20 flex flex-col justify-center items-center gap-20">
      <div className="grid grid-cols-3">
        <Link to={"/teams"}>
          <button className="bg-green-400 border-[1px] border-green-400 px-5 py-2 text-white hover:text-green-400 text-lg font-semibold rounded-xl cursor-pointer hover:bg-white">
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
        </Link>
        <Suspense
          fallback={
            <div className="flex justify-center items-center p-20">
              <span className="loading loading-spinner text-primary loading-xl text-green-400"></span>
            </div>
          }
        >
          <div>
            <TeamInfo
              image_url={image_url}
              teamHeadingPromise={teamHeadingPromise}
            />
          </div>
        </Suspense>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-20">
            <span className="loading loading-spinner text-primary loading-xl text-green-400"></span>
          </div>
        }
      >
        <div>
          <PlayerByTeams
            image_url={image_url}
            playerByTeamsPromise={playerByTeamsPromise}
            teamPromise={teamPromise}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default TeamPage;
