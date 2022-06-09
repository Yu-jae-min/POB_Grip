import axios from 'axios'
import { MovieAPIRes } from 'types/movie.d'

const BASE_URL = 'http://www.omdbapi.com'
const API_KEY = process.env.REACT_APP_MOVIE_APP_ID

interface Params {
  s: string
  page: number
}

export const getMovieListApi = (params: Params) =>
  axios.get<MovieAPIRes>(`${BASE_URL}?apikey=${API_KEY}`, {
    params: {
      ...params,
    },
  })
