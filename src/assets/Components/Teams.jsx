import React, { Suspense, use, useState } from "react";
import Team from "./Team";
import PlayerSearch from "./PlayerSearch";
import { Link } from "react-router-dom";

const Teams = ({ teamPromise, image_url, base_url }) => {
  const teams = use(teamPromise);

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  const playerSearch = fetch(
    `${base_url}/players/search/?search=${searchValue}`
  ).then((res) => res.json());

  return (
    <div>
      <div className="px-20 pt-20">
        <Link to={"/"}>
          <button className="bg-green-400 border-[1px] border-green-400 px-5 py-2 text-white hover:text-green-400 text-lg font-semibold rounded-xl cursor-pointer hover:bg-white">
            <i className="fa-solid fa-arrow-left"></i> Home Page
          </button>
        </Link>
      </div>
      <div className="px-20 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
        {teams.map((team) => (
          <Team
            key={team.id}
            team={team}
            image_url={image_url}
            base_url={base_url}
          />
        ))}
      </div>
      <h1 className="text-center text-2xl font-bold">Select Players</h1>
      <div className="px-10 sm:px-20 md:px-14 lg:px-20 flex justify-center items-center mt-20">
        <i className="fa-solid fa-magnifying-glass relative -right-10 z-1 text-[#8B8B8C] text-lg font-bold"></i>
        <input
          id="search"
          type="text"
          placeholder="Search Your Player......."
          className="input border-2 border-green-400 w-full md:w-[75%] lg:w-[60%] xl:w-[40%] px-10 py-6 text-lg font-bold rounded-lg text-center"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      <Suspense>
        <PlayerSearch
          image_url={image_url}
          base_url={base_url}
          teams={teams}
          playerSearch={playerSearch}
          handleChange={handleChange}
          searchValue={searchValue}
        />
      </Suspense>
    </div>
  );
};

export default Teams;
