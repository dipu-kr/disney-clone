import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] object-cover rounded-lg  border-[3px] border-[#131520] hover:border-[3px] hover:border-gray-400 transition-all duration-200 ease-in cursor-pointer hover:scale-110"
      />
    </>
  );
};

export default MovieCard;
