import React, { use } from "react";
import PlayerByTeam from "./PlayerByTeam";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlayerByTeams = ({ playerByTeamsPromise, image_url }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const playerByTeam = use(playerByTeamsPromise);

  return (
    <div className="font-bold px-2 sm:px-7 py-5 rounded-xl flex flex-col justify-center items-center gap-2">
      <div className="grid grid-cols-1 justify-center items-center">
        <Slider {...settings}>
          {playerByTeam.map((player) => (
            <PlayerByTeam
              image_url={image_url}
              key={player.id}
              player={player}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PlayerByTeams;
