const apikey = "092160b15f0fb047d3771498027ff774";

export const baseImagePath = (size, path) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
export const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upComingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

export const searchMovies = (keyword) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};

export const movieDetails = (id) => {
  return `
https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
};

export const movieCast = (id) => {
  return `
https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
};