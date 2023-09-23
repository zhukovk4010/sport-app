import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: 1,
        login: 'zhukovk4010',
        email: 'zhukovk4010@gmail.com',
        fullName: 'Жуков Кирилл',
        city: 'Подольск',
    },
    reducers: {},
})

export default userSlice.reducer
