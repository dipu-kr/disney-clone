import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="border-[3px] border-[#131520] rounded-lg transition-all duration-200 ease-in-out hover:scale-110">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] object-cover rounded-tl-lg rounded-tr-lg  cursor-pointer"
      />
      <div className="w-[110px] md:w-[260px] h-[35px] md:-h-[45px] px-3 bg-[#222222] rounded-bl-lg rounded-br-lg ">
        <h2 className="text-white pt-2 text-[10px] uppercase md:text-[12px] truncate">
          {movie.title}
        </h2>
      </div>
    </section>
  );
};

export default HrMovieCard;
