// import styles from './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import CommunityPage from 'src/pages/community/community-page'
import MapPage from 'src/pages/map/map-page'
import Tabbar from '../tabbar/tabbat'
import ProfilePage from 'src/pages/profile/profile-page'
import SettingsPage from 'src/pages/settings/settings'

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <MapPage />
                    <Tabbar />
                </>
            ),
        },
        {
            path: '/community',
            element: (
                <>
                    <CommunityPage />
                    <Tabbar />
                </>
            ),
        },
        {
            path: '/profile',
            element: (
                <>
                    <ProfilePage />
                    <Tabbar />
                </>
            ),
        },
        {
            path: '/settings',
            element: (
                <>
                    <SettingsPage />
                    <Tabbar />
                </>
            ),
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
