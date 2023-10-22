import loaderGif from 'src/assets/loader/loader.gif'

import styles from './preloader.module.pcss'

const Preloader = () => {
    return (
        <div className={styles.loaderContainer}>
            <img src={loaderGif} alt='' />
        </div>
    )
}

export default Preloader
