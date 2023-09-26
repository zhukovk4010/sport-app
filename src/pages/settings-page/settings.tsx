import { useAppDispatch } from 'src/hooks/store-hooks'
import styles from './settings.module.css'
import { removeUser } from 'src/redux/slices/userSlice'

const SettingsPage = () => {
    const dispatch = useAppDispatch()
    return (
        <main className={styles.settingsPage}>
            <div>Изменить профиль</div>
            <div>Изменить тему</div>
            <div onClick={() => dispatch(removeUser())}>Выйти из аккаунта</div>
        </main>
    )
}

export default SettingsPage
