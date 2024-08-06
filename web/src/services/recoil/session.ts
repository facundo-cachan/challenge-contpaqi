/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import persistAtom from './persistAtom';

const key = 'session';

export const session = atom({
  default: {},
  key,
  effects: [persistAtom(key)],
})
export const selectorSession = selector({
  key: 'selectorSession',
  get: ({ get }) => get(session),
  set: ({ set }, newValue) => {
    set(
      session,
      newValue
    )
  }
})


export default selectorSession