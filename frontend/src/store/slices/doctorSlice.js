import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    doctorId: "",
    loginInfo: {
        username: "",
        password: ""
    },
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
        },
        setDoctorLoginInfo: (state, action) => {
            state.loginInfo = { ...state.loginInfo, ...action.payload };
        },
        setDoctorId: (state, action) => {
            state.doctorId = action.payload;
        }
    }
})

export const { setDoctorToken, clearDoctorToken, setDoctorLoginInfo, setDoctorId } = doctorSlice.actions
export default doctorSlice.reducer
