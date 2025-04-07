import React, { use } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";

const Categories = ({ categoryPromise, base_url, image_url }) => {
  const categories = use(categoryPromise);
  return (
    <div>
      <div className="px-20 pt-20">
        <Link to={"/"}>
          <button className="bg-green-400 border-[1px] border-green-400 px-5 py-2 text-white hover:text-green-400 text-lg font-semibold rounded-xl cursor-pointer hover:bg-white">
            <i className="fa-solid fa-arrow-left"></i> Home Page
          </button>
        </Link>
      </div>
      <div className="px-5 sm:px-20 md:px-7 lg:px-20 py-20 grid grid-cols-1 justify-center items-center gap-10">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            base_url={base_url}
            image_url={image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
