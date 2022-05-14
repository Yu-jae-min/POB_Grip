import { ModalFunction } from 'types/movie.d'

import styles from './movieModal.module.scss'
import { CloseIcon, HeartIcon } from 'assets/svgs'

const MovieModal = ({ movieDesc, HandleOpenModal }: ModalFunction) => {
  const { Poster, Title, Year, Type } = movieDesc

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
          {MENU_LIST.map((el) => (
            <li key={el.id}>
              <div className={styles.detailBtnWrap}>
                {el.icon === 'bookmark' ? (
                  <HeartIcon className={styles.heartIcon} />
                ) : (
                  <CloseIcon className={styles.closeIcon} onClick={HandleOpenModal} />
                )}
                <span className={styles.detailTitle}>{el.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.modalBg} />
    </div>
  )
}

export default MovieModal

const MENU_LIST = [
  { id: 1, title: '즐겨찾기', icon: 'bookmark' },
  { id: 2, title: '취소', icon: 'close' },
]
