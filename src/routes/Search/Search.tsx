import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import { getMovieListApi } from 'services/movie'
import { MOCK_DATA } from 'services/mock'
import { MovieAPIRes } from 'types/movie.d'

import styles from './search.module.scss'
import { SearchIcon } from 'assets/svgs'

const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchData, setSearchData] = useState<MovieAPIRes>()

  const HandleInputValueSave = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const InputValueSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInputValue('')
  }

  useEffect(() => {
    // api
    // getMovieListApi({
    //   s: 'iron man',
    //   page: 1,
    // }).then((res) => {
    //   setSearchData(res.data)
    // })

    // mock
    setSearchData(MOCK_DATA)
  }, [])

  return (
    <main className={styles.searchWrap}>
      <div className={styles.inputWrap}>
        <form onSubmit={InputValueSubmit}>
          <button type='submit' className={styles.submitBtn}>
            <SearchIcon />
          </button>
          <input type='text' value={inputValue} placeholder='영화명을 검색해주세요.' onChange={HandleInputValueSave} />
        </form>
      </div>
      <div className={styles.listWrap}>
        <div className={styles.succeedWrap}>
          <div />
        </div>
        {/* <div className={styles.failWrap}>
          <span className={styles.fail}>검색 결과가 없습니다.</span>
        </div> */}
      </div>
    </main>
  )
}

export default Search
