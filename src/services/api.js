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

// export async function getTrend() {
//   const url = `${API_URL}/trending/movie/day?api_key=${API_KEY}`;
//   const response = await fetch(`${url}`);
//   // const database = await response.json();
//   return response.json();
//   // return database;
// }

// async function getSearchMovies(query, page = 1) {
//   const url = `${API_URL}/search/movie`;
//   const filter = `?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;
//   const response = await fetch(`${url}${filter}`);
//   const database = await response.json();

//   return database;
// }

// async function getMovieCredits(movieId) {
//   const url = `${API_URL}/movie/${movieId}/credits`;
//   const filter = `?api_key=${API_KEY}&language=en-US`;
//   const response = await fetch(`${url}${filter}`);
//   const database = await response.json();

//   return database;
// }

// async function getMovieReviews(movieId) {
//   const url = `${API_URL}/movie/${movieId}/reviews`;
//   const filter = `?api_key=${API_KEY}&language=en-US&page=1`;

//   const response = await fetch(`${url}${filter}`);
//   const database = await response.json();

//   return database;
// }

// async function getMovieDetails(movieId) {
//   const url = `${API_URL}/movie/${movieId}`;
//   const filter = `?api_key=${API_KEY}&language=en-US`;

//   const response = await fetch(`${url}${filter}`);
//   const database = await response.json();

//   return database;
// }

// const Api = {
//   getTrend,
//   // getSearchMovies,
//   // getMovieDetails,
//   // getMovieCredits,
//   // getMovieReviews,
// };

// export default Api;
