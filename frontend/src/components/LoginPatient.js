import React,{useEffect, useState} from 'react'
import LoginImg from '../assets/login.jpg'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPatientToken ,setPatientLoginInfo,setPatientId } from '../store/slices/patientSlice';

export default function DashboardPatient() {
  // const [password, setPassword ] = useState("");
  // const [username,setUserName] = useState("");
  const dispatch = useDispatch();
  const patientToken = useSelector((state)=>state.patient.token);
  const loginInfo = useSelector((state)=>state.patient.loginInfo);

  let navigate = useNavigate(); 

  const getPatientAccessToken = async () => { 
  await axios.post("http://localhost:8000/api/login/patient/",loginInfo
  ).then((response)=>{
    console.log("response",response.data);
    const token = response.data.access
    console.log(dispatch(setPatientToken(token)));
    console.log(dispatch(setPatientId(response.data.id)));
    // console.log(dispatch(setReceptionistUsername(response.data.username)))
    // navigate("/dashboard-receptionist")
  }).catch((error)=>{
    console.log("error",error)
  })
  }


  const inputHandlerPatient = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    console.log("username",name,"val",val)
    console.log(dispatch(setPatientLoginInfo({ [name]: val})));
  }

  useEffect(()=>{
    console.log("loginInfo",loginInfo,"patientToken",patientToken)
  },[loginInfo,patientToken])

  useEffect(()=>{
    console.log("loginPatient loaded");
  },[])


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt="" />
      </div>
      <div className='bg-[#f2fbf3] flex flex-col justify-center'>
        <div className='max-w-[400px] w-full mx-auto bg-[#145374] p-8 px-8 rounded-lg'>
          <h2 className='text-3xl font-semibold text-gray-400 text-center'>Sign In</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>User Name</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='username' onChange={inputHandlerPatient}/>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="password" name='password' onChange={inputHandlerPatient} />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className="mr-1" type="checkbox"/> Remember password</p>
            <p>Forgot Password?</p>
          </div>
          <button className='w-full my-5 py-2 bg-[#00334E]  hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg' onClick={getPatientAccessToken}>Sign In</button>
        </div>
      </div>
      
    </div>
  )
}
