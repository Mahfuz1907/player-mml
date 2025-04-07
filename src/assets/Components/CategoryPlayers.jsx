import React, { use } from "react";
import CategoryPlayer from "./CategoryPlayer";
import Slider from "react-slick";

const CategoryPlayers = ({ categoryPlayerPromise, image_url }) => {
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
  const categoryPlayers = use(categoryPlayerPromise);

  return (
    <div className="font-bold px-7 py-5 rounded-xl flex flex-col justify-center items-center gap-2">
      <div className="grid grid-cols-1 justify-center items-center gap-10">
        <Slider {...settings}>
          {categoryPlayers.map((categoryPlayer) => (
            <CategoryPlayer
              key={categoryPlayer.id}
              image_url={image_url}
              categoryPlayer={categoryPlayer}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryPlayers;
