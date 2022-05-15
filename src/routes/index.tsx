import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import styles from './routes.module.scss'
import Search from 'routes/Search/Search'
import BookMark from 'routes/BookMark/BookMark'
import TabMenu from 'components/TabMenu/TabMenu'

const App = () => {
  return (
    <div className={styles.appWrap}>
      <div className={styles.app}>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Search />} />
              <Route path='bookmark' element={<BookMark />} />
            </Routes>
            <TabMenu />
          </BrowserRouter>
        </RecoilRoot>
      </div>
    </div>
  )
}

export default App
