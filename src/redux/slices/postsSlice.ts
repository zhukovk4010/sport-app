import { createSlice } from '@reduxjs/toolkit'

export interface IPost {
    id: number
    title: 'Футбол' | 'Баскетбол' | 'Теннис' | 'Волейбол' | 'Хоккей'
    body: string
    time: string
    city: string
    numberOfPersons: number
    activeNumberOfPerson: number
    author: string
}

export interface IPosts {
    postsList: IPost[]
}

const initialState: IPosts = {
    postsList: [
        {
            id: 1,
            title: 'Футбол',
            body: 'Собираемся поиграть в футбол на зеленке',
            time: 'вт. 10 сен. 2023 г.',
            city: 'Подольск',
            numberOfPersons: 10,
            activeNumberOfPerson: 5,
            author: 'Жуков Кирилл',
        },
    ],
}

const postsSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
})

export default postsSlice.reducer
