import ScaleButton from 'src/components/buttons/scale-button/scale-button'
import SearchBar from 'src/components/search-bar/search-bar'

import styles from './map-page.module.css'

const MapPage = () => {
    return (
        <>
            <SearchBar />
            <div className={styles.scaleButtonsPanel}>
                <ScaleButton type='increase' sign='+' />
                <ScaleButton type='decrease' sign='&#8211;' />
            </div>
        </>
    )
}

export default MapPage
