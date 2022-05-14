import { useState, ChangeEvent, FormEvent } from 'react'
import store from 'store'

import MovieList from 'components/MovieList/MovieList'

import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

import { getMovieListApi } from 'services/movie'
import { SearchAPIRes } from 'types/movie.d'
import { MOCK_DATA } from 'services/mock'

import styles from './search.module.scss'
import { SearchIcon } from 'assets/svgs'

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchData, setSearchData] = useState<SearchAPIRes[]>()
  const [bookmarkData, setBookmarkData] = useRecoilState(bookMarkList)

  const HandleInputValueSave = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const InputValueSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    // getMovieListApi({
    //   s: inputValue,
    //   page: 1,
    // })
    //   .then((res) => res.data)
    //   .then((res) => setSearchData(res.Search))

    setSearchData(MOCK_DATA.Search)

    setInputValue('')
  }

  const SaveMovieToLocalStorage = (movie: any) => {
    const abc = bookmarkData.filter((el) => el.Title !== movie.Title)

    setBookmarkData([...abc, movie])

    store.set('bookmark', bookmarkData)
  }

  return (
    <main className={styles.searchWrap}>
      <div className={styles.inputWrap}>
        <form onSubmit={InputValueSubmit}>
          <button type='submit' className={styles.submitBtn}>
            <SearchIcon className={styles.searchIcon} />
          </button>
          <input type='text' value={inputValue} placeholder='영화명을 검색해주세요.' onChange={HandleInputValueSave} />
        </form>
      </div>
      <div className={styles.listWrap}>
        {searchData?.length ? (
          <ul className={styles.succeedWrap}>
            {searchData.map((movie) => (
              <MovieList key={movie.imdbID} movieDesc={movie} />
            ))}
          </ul>
        ) : (
          <div className={styles.failWrap}>
            <span className={styles.fail}>검색 결과가 없습니다.</span>
          </div>
        )}
      </div>
    </main>
  )
}

export default Search
