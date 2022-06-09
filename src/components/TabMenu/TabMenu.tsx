import { NavLink } from 'react-router-dom'

import cn from 'classnames'

import styles from './tabMenu.module.scss'
import { SearchIcon, HeartIcon } from 'assets/svgs'

const TabMenu = () => {
  return (
    <nav className={styles.tabWrap}>
      <ul className={styles.tabMenuWrap}>
        {MENU_LIST.map((tabMenu) => {
          const iconName = tabMenu.icon === 'search'

          return (
            <li key={tabMenu.link}>
              <NavLink to={tabMenu.link} className={({ isActive }) => cn({ [styles.tabActive]: isActive })}>
                {iconName && <SearchIcon className={styles.searchIcon} />}
                {!iconName && <HeartIcon className={styles.heartIcon} />}
                {tabMenu.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TabMenu

const MENU_LIST = [
  { title: '검색', link: '/', icon: 'search' },
  { title: '즐겨찾기', link: 'bookmark', icon: 'heart' },
]
