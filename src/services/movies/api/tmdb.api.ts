import axios from "axios";

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
});
