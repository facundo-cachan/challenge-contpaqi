import { now_playing, genres, guest_session } from "../services/themoviedb"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

import { CardMovie, Input, ShoppingCart } from "../components"
import { getData } from "../utils/_storage"
import { filteredMovies } from "../utils/_filter"
import { selectorFavorites } from "../services/recoil/movies/favorites"

import type { Movie } from "../services/themoviedb"
import type { FavoritesProps } from "../services/recoil/movies/favorites"

const extractGenres = (genreIds: any[]) => genreIds.reduce((acc: any, genre: any) => {
  const moviesGenres = getData('genre');
  const g = moviesGenres.find((g: any) => g.id === genre).name
  acc.push(g)

  return acc
}, []);

const Dashboard = () => {
  const [favorites, setFavorites] = useRecoilState(selectorFavorites);
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