/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import persistAtom from './persistAtom';

export const key = process.env.REACT_APP_SESSION_SECRET ?? 'session';

export const session = atom<string | null>({
  default: null,
  key,
  effects: [persistAtom(key)],
})
const selectorSession = selector({
  key: `${key}Selector`,
  get: ({ get }) => get(session),
  set: ({ set }, newValue) => {
    set(
      session,
      newValue
    )
  }
})


export default selectorSession