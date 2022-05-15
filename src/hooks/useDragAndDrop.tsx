import { useState, DragEvent } from 'react'
import store from 'store'

import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

const useDragAndDrop = () => {
  const [movieList, setMovieList] = useRecoilState(bookMarkList)
  const [grab, setGrab] = useState<HTMLElement>()

  const onDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
  }

  const onDragStart = (e: DragEvent<HTMLElement>) => {
    setGrab(e.currentTarget)
    e.currentTarget.classList.add('grabbing')
    e.dataTransfer.effectAllowed = 'move'
  }

  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    e.currentTarget.classList.remove('grabbing')
    e.dataTransfer.dropEffect = 'move'
    setGrab(undefined)
  }

  const onDrop = (e: DragEvent<HTMLElement>) => {
    // const grabPosition = Number(grab?.dataset.position)
    // const targetPosition = Number(e.currentTarget.dataset.position)
    // const list = [...movieList]
    // list[grabPosition] = list.splice(targetPosition, 1, list[grabPosition])[0]
    // setMovieList(list)
    // store.set('bookMark', list)
  }

  return { onDragOver, onDragStart, onDragEnd, onDrop }
}

export default useDragAndDrop
