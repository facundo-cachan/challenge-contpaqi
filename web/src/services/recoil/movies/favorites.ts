/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import persistAtom from '../persistAtom';
import { Movie } from '../../../services/themoviedb';

export type FavoritesProps = Pick<Movie, 'id' | 'title'>;

const key = 'favorites';

export const atomFavorites = atom<FavoritesProps[]>({
  default: [],
  key,
  effects: [persistAtom(key)],
})
export const selectorFavorites = selector({
  key: 'genres',
  get: ({ get }) => get(atomFavorites),
  set: ({ set }, newValue) => {
    set(
      atomFavorites,
      newValue
    )
  }
})


export default selectorFavorites