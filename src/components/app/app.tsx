// import styles from './App.css'

import CommunityPage from 'src/pages/community/community-page'
import MapPage from 'src/pages/map/map-page'
import Tabbar from '../tabbar/tabbat'
import ProfilePage from 'src/pages/profile/profile-page'
import SettingsPage from 'src/pages/settings/settings'

const App = () => {
    return (
        <>
            {/* <MapPage /> */}
            {/* <CommunityPage /> */}
            {/* <ProfilePage /> */}
            <SettingsPage />
            <Tabbar />
        </>
    )
}

export default App
