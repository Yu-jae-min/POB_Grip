import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

import MovieList from 'components/MovieList/MovieList'

import styles from './bookmark.module.scss'
import { useMemo } from 'react'

import Error from 'components/Error/Error'

const BookMark = () => {
  const [bookmarkData] = useRecoilState(bookMarkList)

  const bookMarkResult = useMemo(() => {
    return (
      <ul className={styles.succeedWrap}>
        {bookmarkData.map((movie, index) => {
          const key = `${movie.imdbID}+${index}`
          return <MovieList key={key} movieDesc={movie} index={index} />
        })}
      </ul>
    )
  }, [bookmarkData])

  return (
    <main className={styles.bookmarkWrap}>
      <div className={styles.titleWrap}>
        <span className={styles.title}>내 즐겨찾기</span>
      </div>
      <div className={styles.listWrap}>
        {bookmarkData.length && bookMarkResult}
        {!bookmarkData.length && <Error warning='즐겨찾기 목록이 비어있습니다.' />}
      </div>
    </main>
  )
}

export default BookMark
