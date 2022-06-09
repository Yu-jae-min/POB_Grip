import SearchInput from './SearchInput/SearchInput'
import SearchResult from './SearchResult/SearchResult'

import styles from './search.module.scss'

const Search = () => {
  return (
    <main className={styles.searchWrap}>
      <SearchInput />
      <SearchResult />
    </main>
  )
}

export default Search
