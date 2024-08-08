import { useRecoilState, useRecoilValue } from "recoil"

import { CardMovie } from "../components"
import { selectorFavorites } from "../services/recoil/movies/favorites"
import { atomNowPlaying } from "../services/recoil/movies/now_playing"

import type { Movie } from "../services/themoviedb"
import type { FavoritesProps } from "../services/recoil/movies/favorites"

const Home = () => {
  const filtered = useRecoilValue(atomNowPlaying);
  const [favorites, setFavorites] = useRecoilState(selectorFavorites);
  

  const addFavorites = (movie: FavoritesProps) => {
    if(favorites.find((f: any) => f.id === movie.id)) return
    setFavorites([...favorites, movie])
  }

  return (<ul className="column_content">
      {filtered?.map((movie: Movie) => (<CardMovie key={movie.id} {...movie} primaryAction={() => addFavorites({
        id: movie.id,
        title: movie.title,
      })} />))}
    </ul>)
}

export default Home