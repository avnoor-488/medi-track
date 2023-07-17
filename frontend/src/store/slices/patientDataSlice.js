import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:{
        username:"",
        email:"",
        address:"",
        blood_group:"",
        full_name:"",
        phone_number:"",
        patient_age:"",
        doctor_assigned:""
    }
    
}

const patientDataSlice = createSlice({
    name: 'patientData',
    initialState,
    reducers: {
        setPatientData: (state, action) => {
            state.data = {...state.data, ...action.payload}
        }
        
    }
})

export const { setPatientData } = patientDataSlice.actions
export default patientDataSlice.reducer
