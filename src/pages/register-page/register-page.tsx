import { Link } from 'react-router-dom'
import Register from 'src/components/firebase/register/register'

import styles from './register-page.module.pcss'

const RegisterPage = () => {
    return (
        <main className={styles.registerPage}>
            <h2>Регистрация</h2>
            <Register />
            <p>
                Уже зарегестрированы? <Link to='/login'>Войти</Link>
            </p>
        </main>
    )
}

export default RegisterPage
