import { Link } from 'react-router-dom'

import iconMap from 'src/assets/icons/map-icon.svg'
import iconСommunity from 'src/assets/icons/community-icon.svg'
import iconProfile from 'src/assets/icons/profile-icon.svg'
import iconSettings from 'src/assets/icons/settings-icon.svg'

import styles from './tabbat.module.css'

const Tabbar = () => {
    return (
        <nav className={styles.tabbar}>
            <Link to='/' className={styles.tabbar__link}>
                <img src={iconMap} alt='' />
                <h5>Карта</h5>
            </Link>
            <Link to='/community' className={styles.tabbar__link}>
                <img src={iconСommunity} alt='' />
                <h5>Сообщество</h5>
            </Link>
            <Link to='/profile' className={styles.tabbar__link}>
                <img src={iconProfile} alt='' />
                <h5>Профиль</h5>
            </Link>
            <Link to='/settings' className={styles.tabbar__link}>
                <img src={iconSettings} alt='' />
                <h5>Найстройки</h5>
            </Link>
        </nav>
    )
}

export default Tabbar
