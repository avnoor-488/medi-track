import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null
}

const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
        setDoctorToken: (state, action) => {
            state.token = action.payload
        },
        clearDoctorToken: state => {
            state.token = null
        }
    }
})

export const { setDoctorToken, clearDoctorToken } = doctorSlice.actions
export default doctorSlice.reducer
