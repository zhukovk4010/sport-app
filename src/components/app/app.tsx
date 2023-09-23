// import styles from './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import CommunityPage from 'src/pages/community-page/community-page'
import MapPage from 'src/pages/map-page/map-page'
import Tabbar from '../tabbar/tabbat'
import ProfilePage from 'src/pages/profile-page/profile-page'
import SettingsPage from 'src/pages/settings-page/settings'

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
