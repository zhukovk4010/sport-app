import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks/store-hooks'
import Form from '../form/form'
import { auth } from 'src/firebase'
import {setUser} from "src/redux/slices/userSlice.ts";

const SignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleRegister = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
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
    return (
        <Form
            title='Регистрация'
            submitForm={handleRegister}
        />
    )
}

export default SignUp
