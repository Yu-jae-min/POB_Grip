import MovieList from 'components/MovieList/MovieList'

import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

import styles from './bookmark.module.scss'

const BookMark = () => {
  const [bookmarkData, setBookmarkData] = useRecoilState(bookMarkList)

  return (
    <main className={styles.bookmarkWrap}>
      <div className={styles.titleWrap}>
        <span className={styles.title}>내 즐겨찾기</span>
      </div>
      <div className={styles.listWrap}>
        {bookmarkData?.length ? (
          <ul className={styles.succeedWrap}>
            {bookmarkData.map((movie, index) => {
              const key = `${movie.imdbID}+${index}`
              return <MovieList key={key} movieDesc={movie} index={index} />
            })}
          </ul>
        ) : (
          <div className={styles.failWrap}>
            <span className={styles.fail}>즐겨찾기 목록이 비어있습니다.</span>
          </div>
        )}
      </div>
    </main>
  )
}

export default BookMark
