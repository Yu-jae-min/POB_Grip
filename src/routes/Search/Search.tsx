import { useState, ChangeEvent, FormEvent, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

import MovieList from 'components/MovieList/MovieList'

import { useRecoilState } from 'recoil'
import { SearchList } from 'states/movie'

import { getMovieListApi } from 'services/movie'

import styles from './search.module.scss'
import { SearchIcon } from 'assets/svgs'

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchData, setSearchData] = useRecoilState(SearchList)
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [ref, inView] = useInView()

  const HandleInputValueSave = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const InputValueSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    getMovieListApi({ s: inputValue, page: 1 })
      .then((res) => res.data)
      .then((res) => setSearchData(res.Search))
  }

  const getItems = useCallback(async () => {
    if (!inputValue) return

    setLoading(true)
    await getMovieListApi({
      s: inputValue,
      page,
    })
      .then((res) => res.data)
      .then((data) => {
        setSearchData((prev) => [...prev, ...data.Search])
      })
    setLoading(false)
  }, [page])

  useEffect(() => {
    getItems()
  }, [getItems])

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevState) => prevState + 1)
    }
  }, [inView, loading])

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
            {searchData.map((movie, index) => {
              const key = `${movie.imdbID}+${index}`
              return <MovieList key={key} movieDesc={movie} index={index} />
            })}
            <div className={styles.observerTarget} ref={ref} />
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

/*
  const MOCK_DATA = {
    Search: [
      {
        Title: 'Iron Man: Armored Adventures',
        Year: '2008–2012',
        imdbID: 'tt0837143',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZWNjZTJjZmYtYjhjZS00ZjgwLWFjY2UtMzBlMDkzZmM3M2FiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
    ],
    totalResults: '100',
    Response: 'True',
  }
*/
