import { configureStore } from '@reduxjs/toolkit'
import receptionistReducer from './slices/receptionistSlice'
import doctorReducer from './slices/doctorSlice'
import patientReducer from './slices/patientSlice'
import patientDataReducer from './slices/patientDataSlice'
import doctorDataReducer from './slices/doctorDataSlice'

const store = configureStore({
    reducer: {
        receptionist: receptionistReducer,
        doctor: doctorReducer,
        patient: patientReducer,
        patientData: patientDataReducer,
        doctorData: doctorDataReducer,
    }
})

export default store
