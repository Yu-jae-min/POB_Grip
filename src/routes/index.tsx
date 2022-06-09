import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RecoilRoot } from 'recoil'

import Search from 'routes/Search/Search'
import BookMark from 'routes/BookMark/BookMark'
import TabMenu from 'components/TabMenu/TabMenu'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrap}>
      <div className={styles.app}>
        <RecoilRoot>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
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
