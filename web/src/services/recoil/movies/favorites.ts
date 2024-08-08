/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import persistAtom from '../persistAtom';
import { Movie } from '../../../services/themoviedb';
import _fecth from '../../fetch';
import { getData } from '../../../utils/_storage';

export type FavoritesProps = Pick<Movie, 'id' | 'title'>;

const key = 'favorites';

export const atomFavorites = atom<FavoritesProps[]>({
  default: [],
  key,
  effects: [persistAtom(key)],
})
export const selectorFavorites = selector({
  key: `${key}Selector`,
  get: async ({ get }) => {
    const u = get(atomFavorites);
    if (!u) {
      const data = getData('token');
      const response = await _fecth({ url: 'auth/me', data });
      return response?.data
    }
    return u
  },
  set: ({ set }, newValue) => {
    set(
      atomFavorites,
      newValue
    )
  }
})


export default selectorFavorites