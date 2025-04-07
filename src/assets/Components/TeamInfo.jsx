import React, { use } from "react";

const TeamInfo = ({ teamHeadingPromise, image_url }) => {
  const teamHeading = use(teamHeadingPromise);
  console.log(teamHeading);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <img
        src={`${image_url}${teamHeading.image}`}
        alt=""
        className="w-60 h-60 rounded-full"
      />
      <h1 className="font-black text-4xl">{teamHeading.name}</h1>
    </div>
  );
};

export default TeamInfo;
