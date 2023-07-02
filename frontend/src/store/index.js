import { configureStore } from '@reduxjs/toolkit'
import receptionistReducer from './slices/receptionistSlice'
import doctorReducer from './slices/doctorSlice'
import patientReducer from './slices/patientSlice'
import patientDataReducer from './slices/patientDataSlice'

const store = configureStore({
    reducer: {
        receptionist: receptionistReducer,
        doctor: doctorReducer,
        patient: patientReducer,
        patientData:patientDataReducer
    }
})

export default store
