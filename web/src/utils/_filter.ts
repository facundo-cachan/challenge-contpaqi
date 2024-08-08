import { Movie } from "../services/themoviedb";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const filteredMovies = (value: string, movies: Movie[]) =>
  movies.filter((movie: Movie) => {
    const release = new Date(movie.release_date).getMonth();
    const release_date = monthNames[release].toLowerCase();
    const title = movie.title.toLowerCase();
    const genre = movie.genre_ids.join(",").toLowerCase();

    if (
      title.includes(value) ||
      release_date.includes(value) ||
      genre.includes(value)
    ) {
      return movie;
    }

    return null;
  });

export { filteredMovies };
