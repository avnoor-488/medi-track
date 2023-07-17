import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    loginInfo:{
        username:"",
        password:""
    },
    patientId:""
}

const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        setPatientToken: (state, action) => {
            state.token = action.payload;
        },
        clearPatientToken: state => {
            state.token = null;
        },
        setPatientLoginInfo: (state, action) => {
            state.loginInfo = {...state.loginInfo, ...action.payload};
        },
        setPatientId:(state,action)=>{
            state.patientId = action.payload;
        }
    }
})

export const { setPatientToken, clearPatientToken ,setPatientLoginInfo,setPatientId} = patientSlice.actions
export default patientSlice.reducer
