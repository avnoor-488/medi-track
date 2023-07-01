import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null
}

const receptionistSlice = createSlice({
    name: 'receptionist',
    initialState,
    reducers: {
        setReceptionistToken: (state, action) => {
            state.token = action.payload
        },
        clearReceptionistToken: state => {
            state.token = null
        }
    }
})

export const { setReceptionistToken, clearReceptionistToken } = receptionistSlice.actions
export default receptionistSlice.reducer
