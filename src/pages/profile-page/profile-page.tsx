import avatarImg from 'src/assets/img/avatar.jpg'
import styles from './profile-page.module.css'
import { useAppSelector } from 'src/hooks/store-hooks'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const user = useAppSelector((state) => state.user)
    if (user.id) {
        return (
            <div className={styles.profilePage}>
                <div className={styles.profilePage__avatarContainer}>
                    <img className={styles.avatarImg} src={avatarImg} alt='' />
                </div>

                <div className={styles.profilePage__fullNameContainer}>
                    {user.fullName}
                    <p>{user.login}</p>
                </div>
                <div className={styles.profilePage__fullNameContainer}>
                    {user.email}
                    <p>Email</p>
                </div>
                <div className={styles.profilePage__fullNameContainer}>
                    {user.city}
                    <p>Город</p>
                </div>
                <div className={styles.profilePage__fullNameContainer}>
                    Достижения
                </div>
            </div>
        )
    }
    return (
        <div className={styles.profilePage}>
            <Link
                className={styles.profilePage__authorizationButton}
                to='/login'
            >
                Войти
            </Link>
        </div>
    )
}

export default ProfilePage
