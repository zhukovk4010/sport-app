import iconMap from 'src/assets/icons/map-icon.svg'
import iconСommunity from 'src/assets/icons/community-icon.svg'
import iconProfile from 'src/assets/icons/profile-icon.svg'
import iconSettings from 'src/assets/icons/settings-icon.svg'
import styles from './tabbat.module.css'

const Tabbar = () => {
    return (
        <nav className={styles.tabbar}>
            <button>
                <img src={iconMap} alt='' />
                <h5>Карта</h5>
            </button>
            <button>
                <img src={iconСommunity} alt='' />
                <h5>Сообщество</h5>
            </button>
            <button>
                <img src={iconProfile} alt='' />
                <h5>Профиль</h5>
            </button>
            <button>
                <img src={iconSettings} alt='' />
                <h5>Найстройки</h5>
            </button>
        </nav>
    )
}

export default Tabbar
