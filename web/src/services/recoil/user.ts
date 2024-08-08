/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from "recoil";

import persistAtom from "./persistAtom";
import _fecth from "../fetch";

import type { User } from "../context/auth";

export const key = "user";
const token = process.env.REACT_APP_TMDB_API_KEY as string;

export const atomUser = atom<User | undefined>({
  default: undefined,
  key,
  effects: [persistAtom(key)],
});
const selectorUser = selector({
  key: `${key}Selector`,
  get: async ({ get }) => {
    const user = get(atomUser);
    console.log("selectorUser", JSON.stringify(user, null, 2));
    if (user) return user;
    const response = await _fecth({ url: "auth/me" });
    console.log("selectorUser", JSON.stringify(response?.data, null, 2));
    return response?.data;
  },
  set: ({ set }, newValue) => {
    set(atomUser, newValue);
  },
});

export default selectorUser;
