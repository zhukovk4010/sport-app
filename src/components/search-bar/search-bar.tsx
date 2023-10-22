import styles from './search-bar.module.pcss'
import iconBell from 'src/assets/icons/bell-icon.svg'

const SearchBar = () => {
    return (
        <div className={styles.search_bar}>
            <input type='text' placeholder='Поиск' />
            <img src={iconBell} alt='' />
        </div>
    )
}

export default SearchBar
