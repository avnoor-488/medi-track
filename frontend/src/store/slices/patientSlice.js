import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null
}

const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        setPatientToken: (state, action) => {
            state.token = action.payload
        },
        clearPatientToken: state => {
            state.token = null
        }
    }
})

export const { setPatientToken, clearPatientToken } = patientSlice.actions
export default patientSlice.reducer
