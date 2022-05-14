import { useEffect, useState } from 'react'

import MovieModal from 'components/MovieModal/MovieModal'

import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

import { BookmarkProps, SearchAPIRes } from 'types/movie.d'

import styles from './movieList.module.scss'
import { StarIcon } from 'assets/svgs'

const MovieList = ({ movieDesc, HandleLocalStorageData }: BookmarkProps) => {
  const { Poster, Title, Year, Type } = movieDesc
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [bookmarkData, setBookmarkData] = useRecoilState(bookMarkList)

  const HandleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const BookmarkCheck = (movie: SearchAPIRes) => {
    return bookmarkData.find(({ imdbID }) => imdbID === movie.imdbID)
  }

  return (
    <li className={styles.movieList}>
      <button type='button' className={styles.detailBtn} onClick={HandleOpenModal}>
        <img src={Poster} alt={Title} className={styles.movieImg} />
        <dl className={styles.descWrap}>
          <dd className={styles.descType}>{Type}</dd>
          <dt className={styles.descTitle}>{Title}</dt>
          <dd className={styles.descYear}>{Year}</dd>
        </dl>
      </button>
      <button
        className={styles.bookmarkBtnWrap}
        type='button'
        name={BookmarkCheck(movieDesc) ? 'Active' : 'UnActive'}
        onClick={(e) => HandleLocalStorageData(movieDesc, e)}
      >
        <StarIcon className={BookmarkCheck(movieDesc) ? styles.starIcon : styles.starIconNone} />
      </button>
      {openModal && (
        <MovieModal
          movieDesc={movieDesc}
          HandleOpenModal={HandleOpenModal}
          HandleLocalStorageData={HandleLocalStorageData}
        />
      )}
    </li>
  )
}

export default MovieList
