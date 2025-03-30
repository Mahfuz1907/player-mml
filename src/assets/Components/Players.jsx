import React, { use } from "react";
//import Player from "./Player";

const Players = ({ countryPromise }) => {
  const countries = use(countryPromise);
  console.log(countries);
  return (
    <div>
      <h3>Countries: {countries.title} </h3>
    </div>
  );
};

export default Players;
