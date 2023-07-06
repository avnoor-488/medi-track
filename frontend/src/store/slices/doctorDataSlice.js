import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        username: "",
        email: "",
        address: "",
        blood_group: "",
        full_name: "",
        phone_number: "",
        doctor_age: "",
        medical_degree: "",
        working_days: [],
        speciality: ""
    },
    doctorUpdateData: {
        username: "",
        email: "",
        address: "",
        blood_group: "",
        full_name: "",
        phone_number: "",
        doctor_age: "",
        medical_degree: "",
        working_days: ["Monday"],
        speciality: ""
    }
}

const doctorDataSlice = createSlice({
    name: 'doctorData',
    initialState,
    reducers: {
        setDoctorData: (state, action) => {
            state.data = { ...state.data, ...action.payload }
        },
        setUpdateDoctorData: (state, action) => {
            state.doctorUpdateData = { ...state.doctorUpdateData, ...action.payload }
        }

    }
})

export const { setDoctorData, setUpdateDoctorData } = doctorDataSlice.actions
export default doctorDataSlice.reducer
