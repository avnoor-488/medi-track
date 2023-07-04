import React, { useEffect, useState } from 'react'
import LoginImg from '../assets/login.jpg'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { setReceptionistToken, setReceptionistLoginInfo } from '../store/slices/receptionistSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Dashboard_reception() {
  // const [password, setPassword ] = useState("");
  // const [username,setUserName] = useState("");
  const dispatch = useDispatch();
  const receptionistToken = useSelector((state) => state.receptionist.token);
  const receptionistLoginInfo = useSelector((state) => state.receptionist.loginInfo);
  let navigate = useNavigate();

  const getAccessToken = async () => {
    await axios.post("http://localhost:8000/api/login/receptionist/", receptionistLoginInfo
    ).then((response) => {
      console.log("response", response.data);
      const token = response.data.access
      console.log(dispatch(setReceptionistToken(token)));
      navigate("/dashboard-receptionist")
    }).catch((error) => {
      console.log("error", error)
    })
  }


  // const inputHandler = (e) => {
  //   let name = e.target.name;
  //   let val = e.target.value;
  //   console.log("name",name,"val",val);
  //   console.log(dispatch(setReceptionistLoginInfo({ [name]: val})))

  // }

  const inputHandlerReceptionist = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    console.log("username", name, "val", val)
    console.log(dispatch(setReceptionistLoginInfo({ [name]: val })));
  }



  useEffect(() => {
    console.log("receptionist", receptionistToken);
    console.log("username", receptionistLoginInfo)
  }, [receptionistToken, receptionistLoginInfo])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={LoginImg} alt="" />
      </div>
      <div className='bg-[#f2fbf3] flex flex-col justify-center'>
        <div className='max-w-[400px] w-full mx-auto bg-[#145374] p-8 px-8 rounded-lg'>
          <div className='text-3xl font-semibold text-gray-400 text-center pb-2'>LogIn as Receptionist</div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>User Name</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='username' onChange={inputHandlerReceptionist} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="password" name='password' onChange={inputHandlerReceptionist} />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='flex items-center'><input className="mr-1" type="checkbox" /> Remember password</p>
            <p>Forgot Password?</p>
          </div>
          <button className='w-full my-5 py-2 bg-[#00334E]  hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg' onClick={(e) => { e.preventDefault(); console.log("sign clicked"); getAccessToken() }}>Sign In</button>
        </div>
      </div>
    </div>
  )
}

