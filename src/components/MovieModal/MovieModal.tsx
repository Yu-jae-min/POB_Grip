import useBookmarkList from 'hooks/useBookmarkList'

import { ModalOpenProps } from 'types/movie.d'

import styles from './movieModal.module.scss'
import { CloseIcon, StarIcon } from 'assets/svgs'

const MovieModal = ({ movieDesc, HandleOpenModal }: ModalOpenProps) => {
  const { Poster, Title, Year, Type } = movieDesc
  const { HandleLocalStorageData, BookmarkCheck } = useBookmarkList()
  const isActive = BookmarkCheck(movieDesc)

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
                name={isActive ? 'Active' : 'UnActive'}
                onClick={(e) => HandleLocalStorageData(movieDesc, e)}
              >
                <StarIcon className={isActive ? styles.starIcon : styles.starIconNone} />
                <span className={styles.detailTitle}>{isActive ? '즐겨찾기 제거' : '즐겨찾기'}</span>
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
