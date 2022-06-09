import { useState, ChangeEvent, FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { searchList, pageCount } from 'states/movie'

import styles from './searchInput.module.scss'
import { SearchIcon } from 'assets/svgs'

const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [, setPage] = useRecoilState(pageCount)
  const [, setSearchData] = useRecoilState(searchList)

  const HandleInputValueSave = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
  }

  const InputValueSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const param = searchParams.get('search')
    if (param === inputValue) return

    setSearchData([])
    setPage(1)
    setSearchParams({ search: inputValue })
  }

  return (
    <div className={styles.inputWrap}>
      <form onSubmit={InputValueSubmit} className={styles.searchForm}>
        <button type='submit' className={styles.submitBtn}>
          <SearchIcon className={styles.searchIcon} />
        </button>
        <input
          type='text'
          className={styles.searchInput}
          value={inputValue}
          placeholder='영화명을 검색해주세요.'
          onChange={HandleInputValueSave}
        />
      </form>
    </div>
  )
}

export default SearchInput
