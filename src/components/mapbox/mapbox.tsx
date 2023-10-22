import mapboxgl from 'mapbox-gl'
import { useEffect, useRef, useState } from 'react'

import styles from './mapbox.module.pcss'

type MapPropsType = {
    initialOptions?: Omit<mapboxgl.MapboxOptions, 'container'>
    onCreated?(map: mapboxgl.Map): void
    onLoaded?(map: mapboxgl.Map): void
    onRemoved?(): void
}

const MapboxMap = ({
    initialOptions = {},
    onCreated,
    onLoaded,
    onRemoved,
}: MapPropsType) => {
    // @ts-ignore
    const [map, setMap] = useState<mapboxgl.Map>()

    const mapNode = useRef(null)

    useEffect(() => {
        const node = mapNode.current

        if (typeof window === 'undefined' || node === null) return

        const mapboxMap = new mapboxgl.Map({
            container: node,
            accessToken: import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN,
            style: 'mapbox://styles/zhukvok4010/clmuj4tx302m601r76khucyww',
            center: [37.62, 55.75],
            zoom: 10,
            ...initialOptions,
        })

        setMap(mapboxMap)

        if (onCreated) onCreated(mapboxMap)

        if (onLoaded) mapboxMap.once('load', () => onLoaded(mapboxMap))

        return () => {
            mapboxMap.remove()
            setMap(undefined)
            if (onRemoved) onRemoved()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div ref={mapNode} className={styles.map} />
}

export default MapboxMap
