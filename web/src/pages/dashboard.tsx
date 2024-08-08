import { useEffect, useState } from "react"
import { now_playing, guest_session } from "../services/themoviedb"
import { getData } from "../utils/_storage"

import type { Movie } from "../services/themoviedb"

const extractGenres = (genreIds: any[]) => genreIds.reduce((acc: any, genre: any) => {
  const moviesGenres = getData('genre');
  const g = moviesGenres.find((g: any) => g.id === genre).name
  acc.push(g)

  return acc
}, []);

const Dashboard = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    guest_session()
    now_playing()
      .then((data: any) => {
        if (data) {
          const m = data.map((movie: Movie) => {
            movie.genre_ids = extractGenres(movie.genre_ids)
            return movie
          });

          setMovies(m);
        }
      })
  }, [])

  return (<>
    <h3>Dashboard KPIs</h3>
    <ul className="flex flex-col">
      {movies?.map(({ id, title }: Movie) => (
        <li key={id}>
          <div>{title}</div>
        </li>
      ))}
    </ul>
  </>)
}

export default Dashboard