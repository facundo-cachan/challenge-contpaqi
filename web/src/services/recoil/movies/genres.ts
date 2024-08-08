/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from "recoil";

import persistAtom from "../persistAtom";
import { Genre } from "../../themoviedb";

const key = "genre";

export const atomGenre = atom<Genre[]>({
  default: [],
  key,
  effects: [persistAtom(key)],
});
export const selectorGenre = selector({
  key: `${key}Selector`,
  get: ({ get }) => get(atomGenre),
  set: ({ set }, newValue) => {
    set(atomGenre, newValue);
  },
});

export default selectorGenre;
