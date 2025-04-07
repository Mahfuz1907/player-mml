import React, { use } from "react";
import Carousel from "./Carousel";

const FrontPage = ({ headPromise, image_url, teamPromise }) => {
  const team = use(teamPromise);
  const numberOfTeams = team.length;
  const head = use(headPromise);
  return (
    <>
      <div className="px-5 sm:px-20 mb-20 mt-20">
        <div className="carousel w-full">
          {team.map((teamLogo) => (
            <Carousel
              key={teamLogo.id}
              image_url={image_url}
              numberOfTeams={numberOfTeams}
              teamLogo={teamLogo}
            />
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
        <div className="logo">
          <img
            src={`${image_url}${head.logo}`}
            alt=""
            className="rounded-xl lg:h-[500px] w-full"
          />
        </div>
        <div className="content lg:h-[500px] flex flex-col justify-center items-center gap-6 px-5 sm:px-15 py-10 rounded-xl border-2 border-green-400">
          <h1 className="text-4xl font-black text-center">{head.name}</h1>
          <p className="text-lg text-center">{head.description}</p>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
