import axios from 'axios';

// const API_KEY = '228bf13a475fd3c7d68f4b12f31b0a1c';
// const API_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '228bf13a475fd3c7d68f4b12f31b0a1c',
    language: 'en-US',
  },
});

export const getTrend = async () => {
  const { data } = await instance.get('trending/movie/day');
  return data;
};

export const getMovieDetailes = async movieId => {
  const { data } = await instance.get(`movie/${movieId}`);
  return data;
};

export const getCast = async movieId => {
  const { data } = await instance.get(`movie/${movieId}/credits`);
  return data;
};

export const getReviews = async movieId => {
  const { data } = await instance.get(`movie/${movieId}/reviews`);
  return data;
};

export const getSearch = async query => {
  const { data } = await instance.get(
    `search/movie?query=${query}&include_adult=false`
  );
  return data.results;
};

// const Api = {
//   getTrend,
//   // getSearchMovies,
//   // getMovieDetails,
//   // getMovieCredits,
//   // getMovieReviews,
// };

// export default Api;
