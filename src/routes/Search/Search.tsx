import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import { getMovieListApi } from 'services/movie'
import { MOCK_DATA } from 'services/mock'
import { SearchAPIRes } from 'types/movie.d'

import styles from './search.module.scss'
import { SearchIcon, StarIcon } from 'assets/svgs'

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchData, setSearchData] = useState<SearchAPIRes[]>()

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
        {searchData?.length ? (
          <ul className={styles.succeedWrap}>
            {searchData.map(({ Title, Year, Type, imdbID, Poster }) => (
              <li key={imdbID}>
                <button type='button' onClick={() => alert('하이1')}>
                  <img src={Poster} alt={Title} />
                  <span>{Title}</span>
                  <span>{Year}</span>
                  <span>{Type}</span>
                </button>
                <button type='button' onClick={() => alert('하이2')}>
                  <StarIcon />
                </button>
              </li>
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
