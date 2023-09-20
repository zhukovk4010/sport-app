import avatarImg from 'src/assets/img/avatar.jpg'
import styles from './profile-page.module.css'

const ProfilePage = () => {
    return (
        <div className={styles.profilePage}>
            <div className={styles.profilePage__avatarContainer}>
                <img className={styles.avatarImg} src={avatarImg} alt='' />
            </div>

            <div className={styles.profilePage__fullNameContainer}>
                Жуков Кирилл
                <p>@zhukovk4010</p>
            </div>
            <div className={styles.profilePage__fullNameContainer}>
                zhukovk4010@gmail.com
                <p>Email</p>
            </div>
            <div className={styles.profilePage__fullNameContainer}>
                Подольск
                <p>Город</p>
            </div>
            <div className={styles.profilePage__fullNameContainer}>
                Достижения
            </div>
        </div>
    )
}

export default ProfilePage
