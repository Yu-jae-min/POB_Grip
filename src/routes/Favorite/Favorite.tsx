import styles from './favorite.module.scss'

const Favorite = () => {
  return (
    <main>
      <div className={styles.inputWrap}>
        <form>
          <input type='submit' />
        </form>
      </div>
      <span>검색 결과가 없습니다.</span>
    </main>
  )
}

export default Favorite
