import { createSlice } from '@reduxjs/toolkit'

export type UserType = {
    id: number | null
    login: string | null
    email: string | null
    token: string | null
    fullName: string | null
    city: string | null
}

const initialState: UserType = {
    id: null,
    login: null,
    email: null,
    token: null,
    fullName: null,
    city: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        },
        removeUser(state) {
            state.email = null
            state.id = null
            state.token = null
        },
    },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
