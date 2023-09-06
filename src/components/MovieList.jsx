import React, { useState, useEffect, useRef } from "react";
import globalApi from "../services/globalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    globalApi.getMovieByGenreId(genreId).then((resp) => {
      //   console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div
      className="flex items-center gap-2 md:gap-5 overflow-x-auto scrollbar-none py-3 scroll-smooth transition-all duration-200 ease-in-out"
      ref={elementRef}
    >
      {movieList?.map((item, index) => (
        <div key={index}>
          {index_ % 3 === 0 ? (
            <HrMovieCard key={index} />
          ) : (
            <MovieCard key={index} movie={item} />
          )}
        </div>
      ))}
      <HiChevronLeft
        className="text-white text-[30px] absolute cursor-pointer ml-8 left-8 hidden md:block"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-white text-[30px] absolute cursor-pointer mr-8 right-8 hidden md:block"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
