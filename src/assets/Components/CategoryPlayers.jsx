import React, { use } from "react";
import CategoryPlayer from "./CategoryPlayer";
import Slider from "react-slick";

const CategoryPlayers = ({ categoryPlayerPromise, image_url }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
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
