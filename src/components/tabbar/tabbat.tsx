import { NavLink } from 'react-router-dom'
import { useState } from 'react'

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
    const [activeIcon, setActiveIcon] = useState('map')
    return (
        <nav className={styles.tabbar}>
            <NavLink
                to='/'
                className={setActive}
                onClick={() => setActiveIcon('map')}
            >
                <img
                    src={activeIcon === 'map' ? iconMapActive : iconMap}
                    alt=''
                />
                <h5>Карта</h5>
            </NavLink>
            <NavLink
                to='/community'
                className={setActive}
                onClick={() => setActiveIcon('community')}
            >
                <img
                    src={
                        activeIcon === 'community'
                            ? iconСommunityActive
                            : iconСommunity
                    }
                    alt=''
                />
                <h5>Сообщество</h5>
            </NavLink>
            <NavLink
                to='/profile'
                className={setActive}
                onClick={() => setActiveIcon('profile')}
            >
                <img
                    src={
                        activeIcon === 'profile'
                            ? iconProfileActive
                            : iconProfile
                    }
                    alt=''
                />
                <h5>Профиль</h5>
            </NavLink>
            <NavLink
                to='/settings'
                className={setActive}
                onClick={() => setActiveIcon('settings')}
            >
                <img
                    src={
                        activeIcon === 'settings'
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
