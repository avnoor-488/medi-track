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
        medical_degree:"",
        working_days:[],
        speciality:""
    }

}

const doctorDataSlice = createSlice({
    name: 'doctorData',
    initialState,
    reducers: {
        setDoctorData: (state, action) => {
            state.data = { ...state.data, ...action.payload }
        }

    }
})

export const { setDoctorData } = doctorDataSlice.actions
export default doctorDataSlice.reducer
