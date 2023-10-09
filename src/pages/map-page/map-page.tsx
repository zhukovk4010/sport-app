import { useState } from 'react'

import ScaleButton from 'src/components/buttons/scale-button/scale-button'
import SearchBar from 'src/components/search-bar/search-bar'
import MapboxMap from 'src/components/mapbox/mapbox'

import styles from './map-page.module.css'
import Preloader from 'src/components/preloader/preloader'

const MapPage = () => {
    const [loading, setLoading] = useState(true)
    const handleMapLoading = () => setLoading(false)

    return (
        <>
            <MapboxMap
                initialOptions={{ center: [37.62, 55.75] }}
                onLoaded={handleMapLoading}
            />

            {loading && <Preloader />}

            <SearchBar />
            <div className={styles.scaleButtonsPanel}>
                <ScaleButton type='increase' sign='+' />
                <ScaleButton type='decrease' sign='&#8211;' />
            </div>
        </>
    )
}

export default MapPage
