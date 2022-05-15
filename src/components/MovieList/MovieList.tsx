import { useState } from 'react'

import MovieModal from 'components/MovieModal/MovieModal'

import useBookmarkList from 'hooks/useBookmarkList'
import useDragAndDrop from 'hooks/useDragAndDrop'

import { DragAndDropIndex } from 'types/movie.d'

import styles from './movieList.module.scss'
import { StarIcon } from 'assets/svgs'

const MovieList = ({ movieDesc, index }: DragAndDropIndex) => {
  const { Poster, Title, Year, Type } = movieDesc
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { HandleLocalStorageData, BookmarkCheck } = useBookmarkList()
  const { onDragOver, onDragStart, onDragEnd, onDrop } = useDragAndDrop()
  const pathName = window.location.pathname

  const HandleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <li
      data-position={index}
      className={styles.movieList}
      draggable={pathName === '/bookmark'}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
    >
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
      {openModal && <MovieModal movieDesc={movieDesc} HandleOpenModal={HandleOpenModal} />}
    </li>
  )
}

export default MovieList
