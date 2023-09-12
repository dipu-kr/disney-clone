import axios from "axios";

// const api_key = import.meta.env.VITE_API_KEY;

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "3d8874eba0651ac53c1d4acae9eae8e6";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=3d8874eba0651ac53c1d4acae9eae8e6";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
