import { useState } from 'react'
import store from 'store'

import { useRecoilState } from 'recoil'
import { bookMarkList } from 'states/movie'

const useDragAndDrop = () => {
  const [movieList, setMovieList] = useRecoilState(bookMarkList)
  const [grab, setGrab] = useState<any>(null)

  const onDragOver = (e: any) => {
    e.preventDefault()
  }

  const onDragStart = (e: any) => {
    e.currentTarget.classList.add('grabbing')
    e.currentTarget.style.opacity = 0.5
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.currentTarget)
    setGrab(e.currentTarget)
  }

  const onDragEnd = (e: any) => {
    e.target.classList.remove('grabbing')
    e.target.style.opacity = ''
    e.dataTransfer.dropEffect = 'move'
  }

  const onDrop = (e: any) => {
    // const grabPosition = Number(grab.dataset.position)
    // const targetPosition = Number(e.currentTarget.dataset.position)
    // const list = [...movieList]
    // list[grabPosition] = list.splice(targetPosition, 1, list[grabPosition])[0]
    // setMovieList(list)
    // store.set('bookMark', list)
  }

  return { onDragOver, onDragStart, onDragEnd, onDrop }
}

export default useDragAndDrop
