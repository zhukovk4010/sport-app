import { Link } from 'react-router-dom'
import Login from 'src/components/firebase/login/login'

const LoginPage = () => {
    return (
        <main>
            <Link to='/profile'>Вернутся обратно</Link>
            <h2>Login</h2>
            <Login />
            <Link to='/register'>Регистрация</Link>
        </main>
    )
}

export default LoginPage
