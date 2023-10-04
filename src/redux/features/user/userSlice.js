import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    fullname: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.fullname = action.payload.fullname
        }
    },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer