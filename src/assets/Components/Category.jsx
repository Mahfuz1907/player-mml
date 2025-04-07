import React, { Suspense, useEffect, useState } from "react";
import CategoryPlayers from "./CategoryPlayers";

const Category = ({ category, base_url, image_url }) => {
  const [categoryPlayerPromise, setCategoryPlayerPromise] = useState(null);

  const getID = (id) => {
    const promise = fetch(`${base_url}/categories/${id}`).then((res) =>
      res.json()
    );
    setCategoryPlayerPromise(promise);
  };

  useEffect(() => {
    getID(category.id);
  }, [category.id]);

  return (
    <div className="px-10 py-8 rounded-xl flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl font-bold">Category {category.name}</h1>
      {categoryPlayerPromise && (
        <Suspense
          fallback={
            <div className="flex justify-center items-center p-20">
              <span className="loading loading-spinner text-primary loading-xl text-green-400"></span>
            </div>
          }
        >
          <CategoryPlayers
            image_url={image_url}
            categoryPlayerPromise={categoryPlayerPromise}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Category;
