import React from "react";

const Carousel = ({ teamLogo, numberOfTeams, image_url }) => {
  console.log(teamLogo);
  console.log(numberOfTeams);
  const prevSlide = teamLogo.id == 1 ? numberOfTeams : teamLogo.id - 1;
  const nextSlide = teamLogo.id == numberOfTeams ? 1 : teamLogo.id + 1;
  return (
    <div
      id={`slide${teamLogo.id}`}
      className="carousel-item relative w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between items-center gap-5"
    >
      <img
        src={`${image_url}/${teamLogo.image}`}
        className="h-[400px] w-full xl:col-span-2 rounded-xl"
      />
      <div className="content rounded-xl bg-green-400 text-white h-[400px] flex flex-col justify-center items-center gap-10 px-18 py-10">
        <h1 className="text-xl font-bold">{teamLogo.name}</h1>
        <p className="text-center bg-white text-green-400 px-5 py-3 rounded-xl">
          {teamLogo.details}
        </p>
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={`#slide${prevSlide}`} className="btn btn-circle">
          <i className="fa-solid fa-angle-left"></i>
        </a>
        <a href={`#slide${nextSlide}`} className="btn btn-circle">
          <i className="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
