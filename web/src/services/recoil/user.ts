/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import persistAtom from './persistAtom';
import _fecth from '../fetch';
import { getData } from '../../utils/_storage';

import type { User } from '../context/auth';

export const key = 'user';

export const atomUser = atom<User | null>({
  default: null,
  key,
  effects: [persistAtom(key)],
})
const selectorUser = selector({
  key: `${key}Selector`,
  get: async ({ get }) => {
    const user = get(atomUser);
    if(user) return user
    const data = getData('token');
    if (!user && data) {
      const response = await _fecth({ url: 'auth/me', data });
      return response?.data
    }
    return user
  },
  set: ({ set }, newValue) => {
    set(
      atomUser,
      newValue
    )
  }
})


export default selectorUser