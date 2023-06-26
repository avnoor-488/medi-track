import React from 'react'
import LoginImg from '../assets/login.jpg'
import { useNavigate } from "react-router-dom";

export default function Dashboard_reception() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `../dashboard`; 
    navigate(path);
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt="" />
      </div>
      <div className='bg-[#f2fbf3] flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-[#145374] p-8 px-8 rounded-lg'>
          <h2 className='text-3xl font-semibold text-gray-400 text-center'>Sign In</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>User Name</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="password" />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className="mr-1" type="checkbox"/> Remember password</p>
            <p>Forgot Password?</p>
          </div>
          <button className='w-full my-5 py-2 bg-[#00334E]  hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg' onClick={routeChange}>Sign In</button>
        </form>
      </div>
      
    </div>
  )
}

