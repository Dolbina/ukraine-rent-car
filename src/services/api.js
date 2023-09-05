import axios from "axios";
const API_KEY = '48fb147532276641d9f1a55b83b3113d';

export const fetchMoviesTrending = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
 
  return data;
  
}

export const searchMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
 
  return data;
};

export const fetchMoviesById = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMoviesCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
  
};

export const fetchMoviesReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
console.log(data);
  return data;
  
};
