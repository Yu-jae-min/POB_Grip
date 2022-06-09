import { useState, DragEvent } from 'react'

import store from 'store'

import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

const useDragAndDrop = (index: number) => {
  const [movieList, setMovieList] = useRecoilState(bookMarkList)
  const [grab, setGrab] = useState<number>(0)

  const onDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
  }

  const onDragStart = () => {
    setGrab(index)
  }

  const onDragEnd = () => {
    setGrab(0)
  }

  const onDrop = () => {
    const setList = [...movieList]
    setList[grab] = setList.splice(index, 1, setList[grab])[0]
    setMovieList(setList)
    store.set('bookMark', setList)
  }

  return { onDragOver, onDragStart, onDragEnd, onDrop }
}

export default useDragAndDrop
