import { useAppSelector } from './store-hooks'

export const useAuth = () => {
    const { email, token, id } = useAppSelector((state) => state.user)

    return {
        idAuth: !!email,
        email: email,
        token: token,
        id: id,
    }
}
