import React, { useState, useEffect, useRef } from "react";
import globalApi from "../services/globalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    globalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer hidden md:block"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0 hidden md:block"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList?.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full  md:h-[310px] object-cover object-left-top mr-5 rounded-md  border-[3px] border-[#131520] hover:border-[3px] hover:border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
