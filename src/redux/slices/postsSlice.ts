import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
    name: 'user',
    initialState: [
        {
            id: 1,
            title: 'Футбол',
            body: 'Собираемся поиграть в футбол на зеленке',
            time: 'вт. 10 сен. 2023 г.',
            city: 'Подольск',
            numberOfPersons: 10,
        },
    ],
    reducers: {},
})

export default postsSlice.reducer
