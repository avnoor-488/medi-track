import React, { useEffect } from 'react'
import LoginImg from '../assets/login.jpg'
import { setDoctorToken, setDoctorLoginInfo, setDoctorId } from '../store/slices/doctorSlice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function DashboardDoctor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctorToken = useSelector((state) => state.doctor.token);
  const doctorLoginInfo = useSelector((state) => state.doctor.loginInfo);

  const getDoctorAccessToken = async () => {
    await axios.post("http://localhost:8000/api/login/doctor/", doctorLoginInfo
    ).then((response) => {
      console.log("response", response.data);
      const token = response.data.access
      console.log(dispatch(setDoctorToken(token)));
      console.log(dispatch(setDoctorId(response.data.id)));
      navigate("/dashboard-doctor")
    }).catch((error) => {
      console.log("error", error)
    })
  }

  const inputHandlerDoctor = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    console.log("username", name, "val", val)
    console.log(dispatch(setDoctorLoginInfo({ [name]: val })));
  }

  useEffect(() => {
    console.log("loginInfo", doctorLoginInfo, "doctorToken", doctorToken)
  }, [doctorLoginInfo, doctorToken])

  useEffect(() => {
    console.log("loginDoctor loaded");
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt="" />
      </div>
      <div className='bg-[#f2fbf3] flex flex-col justify-center'>
        <div className='max-w-[400px] w-full mx-auto bg-[#145374] p-8 px-8 rounded-lg'>
          <h2 className='text-3xl font-semibold text-gray-400 text-center'>LogIn as Doctor</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>User Name</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='username' onChange={inputHandlerDoctor} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="password" name='password' onChange={inputHandlerDoctor} />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className="mr-1" type="checkbox" /> Remember password</p>
            <p>Forgot Password?</p>
          </div>
          <button className='w-full my-5 py-2 bg-[#00334E]  hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg' onClick={getDoctorAccessToken}>Log-In</button>
        </div>
      </div>

    </div>
  )
}
