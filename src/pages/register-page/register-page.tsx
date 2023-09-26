import { Link } from 'react-router-dom'
import Register from 'src/components/firebase/register/register'

const RegisterPage = () => {
    return (
        <div>
            <h2>Регистрация</h2>
            <Register />
            <p>
                Уже зарегестрированы? <Link to='/login'>Войти</Link>
            </p>
        </div>
    )
}

export default RegisterPage
