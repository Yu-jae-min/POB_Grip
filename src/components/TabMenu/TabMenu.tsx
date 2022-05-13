import { NavLink } from 'react-router-dom'

import styles from './tabMenu.module.scss'
import cn from 'classnames'

import { SearchIcon, HeartIcon } from '../../assets/svgs'

const TabMenu = () => {
  return (
    <nav className={styles.tabWrap}>
      <ul className={styles.tabMenuWrap}>
        {MENU_LIST.map((tabMenu) => (
          <li key={tabMenu.link}>
            <NavLink to={tabMenu.link} className={({ isActive }) => cn({ [styles.tabActive]: isActive })}>
              {tabMenu.icon === 'search' ? (
                <SearchIcon className={styles.searchIcon} />
              ) : (
                <HeartIcon className={styles.heartIcon} />
              )}
              {tabMenu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TabMenu

const MENU_LIST = [
  { title: '검색', link: '/', icon: 'search' },
  { title: '즐겨찾기', link: 'favorite', icon: 'heart' },
]
