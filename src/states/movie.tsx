import { atom } from 'recoil'
import { SearchAPIRes } from 'types/movie.d'

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const bookMarkList = atom<SearchAPIRes[]>({
  key: 'bookMarkList',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const SearchList = atom<SearchAPIRes[]>({
  key: 'SearchList',
  default: [],
})
