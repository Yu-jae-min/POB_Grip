import { useState, useEffect, useCallback, useMemo } from 'react'

import { useSearchParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

import { useRecoilState } from 'recoil'
import { searchList, pageCount } from 'states/movie'

import MovieList from 'components/MovieList/MovieList'
import Error from 'components/Error/Error'

import { getMovieListApi } from 'services/movie'

import styles from './searchResult.module.scss'

const SearchResult = () => {
  const [searchData, setSearchData] = useRecoilState(searchList)
  const [page, setPage] = useRecoilState(pageCount)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(true)
  const [searchParams] = useSearchParams()
  const [ref, inView] = useInView()
  const s = searchParams.get('search')

  const getItems = useCallback(async () => {
    if (!s) return
    setLoading(true)
    setError(false)

    await getMovieListApi({ s, page })
      .then((res) => res.data)
      .then((data) => {
        setSearchData((prev) => [...prev, ...data.Search])
      })
      .catch(() => setError(true))

    setLoading(false)
  }, [page, s, setSearchData])

  useEffect(() => {
    getItems()
  }, [getItems])

  useEffect(() => {
    if (inView) setPage((prevState) => prevState + 1)
  }, [inView, loading, setPage])

  const successResult = useMemo(() => {
    const searchDataList = searchData.map((movie, index) => {
      const key = `${movie.imdbID}+${index}`
      return <MovieList key={key} movieDesc={movie} index={index} />
    })

    return (
      <ul className={styles.succeedWrap}>
        {searchDataList}
        <div className={styles.observerTarget} ref={ref} />
      </ul>
    )
  }, [searchData, ref])

  return (
    <div className={styles.listWrap}>
      {searchData && successResult}
      {!error && loading && <Error warning='목록을 로딩 중 입니다.' />}
      {error && !loading && <Error warning='검색 결과가 없습니다.' />}
    </div>
  )
}

export default SearchResult
