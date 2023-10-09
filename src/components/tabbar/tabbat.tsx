import { NavLink, useLocation } from 'react-router-dom'

import iconMap from 'src/assets/icons/map-icon.svg'
import iconMapActive from 'src/assets/icons/map-icon-active.svg'
import iconСommunity from 'src/assets/icons/community-icon.svg'
import iconСommunityActive from 'src/assets/icons/community-icon-active.svg'
import iconProfile from 'src/assets/icons/profile-icon.svg'
import iconProfileActive from 'src/assets/icons/profile-icon-active.svg'
import iconSettings from 'src/assets/icons/settings-icon.svg'
import iconSettingsActive from 'src/assets/icons/settings-icon-active.svg'

import styles from './tabbat.module.css'

const setActive = ({ isActive }: { isActive: unknown }) =>
    isActive ? `${styles.tabbar__link} ${styles.active}` : styles.tabbar__link

const Tabbar = () => {
    const location = useLocation()
    const activeIconRoute = location.pathname

    return (
        <nav className={styles.tabbar}>
            <NavLink to='/' className={setActive}>
                <img
                    src={activeIconRoute === '/' ? iconMapActive : iconMap}
                    alt=''
                />
                <h5>Карта</h5>
            </NavLink>
            <NavLink to='/community' className={setActive}>
                <img
                    src={
                        activeIconRoute === '/community'
                            ? iconСommunityActive
                            : iconСommunity
                    }
                    alt=''
                />
                <h5>Сообщество</h5>
            </NavLink>
            <NavLink to='/profile' className={setActive}>
                <img
                    src={
                        activeIconRoute === '/profile'
                            ? iconProfileActive
                            : iconProfile
                    }
                    alt=''
                />
                <h5>Профиль</h5>
            </NavLink>
            <NavLink to='/settings' className={setActive}>
                <img
                    src={
                        activeIconRoute === '/settings'
                            ? iconSettingsActive
                            : iconSettings
                    }
                    alt=''
                />
                <h5>Найстройки</h5>
            </NavLink>
        </nav>
    )
}

export default Tabbar
