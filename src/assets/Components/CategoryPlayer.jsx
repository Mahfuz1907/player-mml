import React from "react";

const CategoryPlayer = ({ categoryPlayer, image_url }) => {
  return (
    <>
      <div className="card mb-24 sm:mb-20 flex flex-col sm:mx-2 md:mx-5 justify-center items-center gap-7 border-[1px] border-green-400 rounded-xl px-7 py-5">
        <div className="card-img">
          <img
            src={`${image_url}${categoryPlayer.image}`}
            alt=""
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="card-content">
          <h1>{categoryPlayer.name}</h1>
        </div>
        <button className="bg-green-400 text-white px-3 py-1 rounded-xl">
          {categoryPlayer.team == null ? "Not Selected" : "Selected"}
        </button>
      </div>
    </>
  );
};

export default CategoryPlayer;
