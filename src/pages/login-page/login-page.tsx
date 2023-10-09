import { Link } from 'react-router-dom'
import Login from 'src/components/firebase/login/login'

import iconBack from 'src/assets/icons/back-icon.svg'

import styles from './login-page.module.css'

const LoginPage = () => {
    return (
        <main className={styles.loginPage}>
            <Link className={styles.loginPage__backLink} to='/'>
                <img src={iconBack} alt='' />
                <p>Вернутся на главную</p>
            </Link>
            <h2>Вход</h2>
            <Login />
            <Link className={styles.loginPage__registerLink} to='/register'>
                Регистрация
            </Link>
        </main>
    )
}

export default LoginPage
