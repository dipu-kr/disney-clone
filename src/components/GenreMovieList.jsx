import React from "react";
import { genere } from "../constant/GenresList.js";
import MovieList from "./MovieList.jsx";

const GenreMovieList = () => {
  return (
    <div>
      {genere?.map(
        (item, index) =>
          index <= 4 && (
            <div key={index} className="p-2 md:p-8 px-5 md:px-16">
              <h2 className="text-[18px] text-white font-semibold">
                {item.name}
              </h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
