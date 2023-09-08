import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] object-cover rounded-lg  border-[3px] border-[#131520] hover:border-[3px] hover:border-gray-400 transition-all duration-200 ease-in cursor-pointer hover:scale-110"
      />
      <h2 className="w-[110px] md:w-[260px] md:min-h-[40px] md:h-auto text-white mt-2 text-xs md:text-sm">
        {movie.title}
      </h2>
    </section>
  );
};

export default HrMovieCard;
