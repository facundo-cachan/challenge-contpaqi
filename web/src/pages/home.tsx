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

const Home = () => {
  const [favorites, setFavorites] = useRecoilState(selectorFavorites);
  const [movies, setMovies] = useState<Movie[]>([])
  const [filtered, setFiltered] = useState<Movie[]>([]);

  useEffect(() => { genres() }, [movies])
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
          setFiltered(m)
        }
      })
  }, [])

  const filterMovie = ({ target: { value } }: any) => {
    if (value.length > 3 && value !== '') {
      setMovies(() => movies)
    } else {
      setFiltered(() => filteredMovies(value, movies))
    }
  }
  const addFavorites = (movie: FavoritesProps) => {
    setFavorites([...favorites, movie])
  }

  return (<>
    <header className="h-12 border border-black">
      <ShoppingCart />
      <Input type="search" placeholder="Search movies" className="w-full h-full p-4 border-0" onChange={filterMovie} />
    </header>
    <ul className="column_content">
      {filtered?.map((movie: Movie) => (<CardMovie key={movie.id} {...movie} primaryAction={() => addFavorites({
        id: movie.id,
        title: movie.title,
      })} />))}
    </ul>
  </>)
}

export default Home