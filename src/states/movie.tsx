import { atom } from 'recoil'
import { SearchAPIRes } from 'types/movie.d'

export const bookMarkList = atom<SearchAPIRes[]>({
  key: 'bookMarkList',
  default: [],
})
