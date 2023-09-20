import styles from './search-bar.module.css'
import iconBell from 'src/assets/icons/bell-icon.svg'

const SearchBar = () => {
    return (
        <section className={styles.search_bar}>
            <input type='text' placeholder='Поиск' />
            <img src={iconBell} alt='' />
        </section>
    )
}

export default SearchBar