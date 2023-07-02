import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    loginInfo:{
        username:"",
        password:""
    }   
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
        },
        setReceptionistLoginInfo: (state, action) => {
            console.log("action.payload",action.payload)
            state.loginInfo = {...state.loginInfo, ...action.payload};
        }
    }
})

export const { setReceptionistToken, clearReceptionistToken,setReceptionistLoginInfo } = receptionistSlice.actions
export default receptionistSlice.reducer
