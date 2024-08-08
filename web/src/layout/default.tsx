import { useEffect, useState } from "react";
import { HeaderResponsive, Input, Nav } from "../components";
import { Outlet } from "react-router-dom";
import { filteredMovies } from "../utils/_filter";

import {
  genres,
  guest_session,
  now_playing,
  type Movie,
} from "../services/themoviedb";
import { getData } from "../utils/_storage";
import { useRecoilState } from "recoil";
import { atomNowPlaying } from "../services/recoil/movies/now_playing";

import type { MenuItemProps } from "../components/organisms/nav/types";

const items: MenuItemProps[] = [
  {
    path: "/",
    label: "Home",
    icon: null,
  },
];
const extractGenres = (genreIds: any[]) =>
  genreIds.reduce((acc: any, genre: any) => {
    const moviesGenres = getData("genre");
    const g = moviesGenres.find((g: any) => g.id === genre).name;
    acc.push(g);

    return acc;
  }, []);
const Layout = (): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [_, setFiltered] = useRecoilState<Movie[]>(atomNowPlaying);

  useEffect(() => {
    genres();
  }, [movies]);
  useEffect(() => {
    guest_session();
    now_playing().then((data: any) => {
      if (data) {
        const m = data.map((movie: Movie) => {
          movie.genre_ids = extractGenres(movie.genre_ids);
          return movie;
        });

        setMovies(m);
        setFiltered(m);
      }
    });
  }, []);

  const filterMovie = ({ target: { value } }: any) => {
    if (value.length <= 4 && value !== "") {
      setMovies(() => movies);
    } else {
      setFiltered(() => filteredMovies(value, movies));
    }
  };

  return (
    <main className="flex flex-col">
      <HeaderResponsive items={items}>
        <Input
          type="search"
          placeholder="Search movies"
          className="w-80"
          onChange={filterMovie}
          style={{ height: 44 }}
        />
        <Nav className="hidden md:flex" items={items} />
      </HeaderResponsive>
      <Outlet />
    </main>
  );
};

export default Layout;
