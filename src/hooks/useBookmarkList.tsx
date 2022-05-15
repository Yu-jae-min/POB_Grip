import store from 'store'

import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

import { SearchAPIRes } from 'types/movie.d'

const useBookmarkList = () => {
  const [bookmarkData, setBookmarkData] = useRecoilState(bookMarkList)

  const AddMovieList = (movie: SearchAPIRes) => {
    const checkedMovieData = bookmarkData.find((list) => list.imdbID === movie.imdbID)
      ? bookmarkData
      : [...bookmarkData, movie]
    setBookmarkData(checkedMovieData)
    store.set('bookMark', checkedMovieData)
  }

  const DeleteMovieList = (movie: SearchAPIRes) => {
    const filterMovieData = store.get('bookMark').filter((movieList: any) => movieList.imdbID !== movie.imdbID)

    setBookmarkData(filterMovieData)
    store.set('bookMark', filterMovieData)
  }

  const HandleLocalStorageData = (movie: SearchAPIRes, event: any) => {
    event.currentTarget.name === 'UnActive' ? AddMovieList(movie) : DeleteMovieList(movie)
  }

  const BookmarkCheck = (movie: SearchAPIRes) => {
    return bookmarkData.find(({ imdbID }) => imdbID === movie.imdbID)
  }

  return { HandleLocalStorageData, BookmarkCheck }
}

export default useBookmarkList
