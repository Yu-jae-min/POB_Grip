import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { SearchAPIRes } from 'types/movie.d'

const { persistAtom } = recoilPersist()

export const bookMarkList = atom<SearchAPIRes[]>({
  key: '#bookMarkList',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const searchList = atom<SearchAPIRes[]>({
  key: '#searchList',
  default: [],
})

export const pageCount = atom<number>({
  key: '#pageCount',
  default: 1,
})
