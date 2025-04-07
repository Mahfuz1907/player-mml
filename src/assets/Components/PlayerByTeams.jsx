import React, { use } from "react";
import PlayerByTeam from "./PlayerByTeam";
import Slider from "react-slick";

const PlayerByTeams = ({ playerByTeamsPromise, image_url }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 3, // Default number of slides to scroll
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet devices
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 2, // Scroll 2 slides at a time
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 640, // Very small screens
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  const playerByTeam = use(playerByTeamsPromise);

  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <Slider {...settings}>
        {playerByTeam.map((player) => (
          <PlayerByTeam image_url={image_url} key={player.id} player={player} />
        ))}
      </Slider>
    </div>
  );
};

export default PlayerByTeams;
