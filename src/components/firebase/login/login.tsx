import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks/store-hooks'
import Form from '../form/form'
import { auth } from 'src/firebase'
import { setUser } from 'src/redux/slices/userSlice'

const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleLogin = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    })
                )
                navigate('/', { replace: true })
            })
            .catch(console.error)
    }
    return <Form title="Войти" submitForm={handleLogin} />
}

export default Login
