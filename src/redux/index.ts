import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import postsSlice from './slices/postsSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        posts: postsSlice,
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
