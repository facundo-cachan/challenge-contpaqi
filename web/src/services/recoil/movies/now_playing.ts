/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import persistAtom from '../persistAtom';
import { Movie } from '../../../services/themoviedb';

const key = 'now_playing';

export const atomNowPlaying = atom<Movie[]|[]>({
  default: [],
  key,
  effects: [persistAtom(key)],
})
export const selectorNowPlaying = selector({
  key: `${key}Selector`,
  get: async ({ get }) => get(atomNowPlaying),
  set: ({ set }, newValue) => {
    set(
      atomNowPlaying,
      newValue
    )
  }
})


export default selectorNowPlaying