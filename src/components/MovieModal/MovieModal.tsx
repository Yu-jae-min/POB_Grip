import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

import { ModalOpenProps, SearchAPIRes } from 'types/movie.d'

import styles from './movieModal.module.scss'
import { CloseIcon, StarIcon } from 'assets/svgs'

const MovieModal = ({ movieDesc, HandleOpenModal, HandleLocalStorageData }: ModalOpenProps) => {
  const { Poster, Title, Year, Type } = movieDesc
  const [bookmarkData, setBookmarkData] = useRecoilState(bookMarkList)

  const BookmarkCheck = (movie: SearchAPIRes) => {
    return bookmarkData.find(({ imdbID }) => imdbID === movie.imdbID)
  }

  return (
    <div className={styles.modalWrap}>
      <div className={styles.modal}>
        <dl className={styles.modalDescWrap}>
          <dd className={styles.modalDescYear}>{Year}</dd>
          <dt className={styles.modalDescTitle}>{Title}</dt>
          <dd className={styles.modalDescType}>{Type}</dd>
        </dl>
        <img src={Poster} alt={Title} className={styles.modalMovieImg} />
        <ul className={styles.detailMenuWrap}>
          <li className={styles.detailBtnWrap}>
            <div className={styles.detailBtn}>
              <button
                className={styles.bookmarkBtnWrap}
                type='button'
                name={BookmarkCheck(movieDesc) ? 'Active' : 'UnActive'}
                onClick={(e) => HandleLocalStorageData(movieDesc, e)}
              >
                <StarIcon className={BookmarkCheck(movieDesc) ? styles.starIcon : styles.starIconNone} />
                <span className={styles.detailTitle}>{BookmarkCheck(movieDesc) ? '즐겨찾기 제거' : '즐겨찾기'}</span>
              </button>
            </div>
          </li>
          <li className={styles.detailBtnWrap}>
            <div className={styles.detailBtn}>
              <button className={styles.bookmarkBtnWrap} type='button' onClick={HandleOpenModal}>
                <CloseIcon className={styles.closeIcon} />
                <span className={styles.detailTitle}>취소</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.modalBg} />
    </div>
  )
}

export default MovieModal
