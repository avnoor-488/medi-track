import React, { useEffect , useState} from 'react'
import LoginImg from '../assets/login.jpg'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { setReceptionistToken } from '../store/slices/receptionistSlice';
import { useDispatch,useSelector } from 'react-redux';


export default function Dashboard_reception() {
  const [password, setPassword ] = useState("");
  const [username,setUserName] = useState("");
  const dispatch = useDispatch();
  const receptionistToken = useSelector((state)=>state.receptionist.token);
  let navigate = useNavigate(); 

  const getAccessToken = async () =>{ 
  await axios.post("http://localhost:8000/api/login/receptionist/",{username:username,password:password}
  ).then((response)=>{
    console.log("response",response);
    const token = response.data.access
    console.log(dispatch(setReceptionistToken(token)));
    navigate("/dashboard-receptionist")
  }).catch((error)=>{
    console.log("error",error)
  })
  }


  // const inputHandler = (e) =>{
  //   if(e.target.name==="username"){
  //     setUserName(e.target.value);
  //     console.log("username",e.target.value);
  //   }
  //   else{
  //     setPassword(e.target.value);
  //     console.log("password",e.target.value);
  //   }
  // }


useEffect(()=>{
  console.log("receptionist",receptionistToken);
  console.log("username",username)
},[receptionistToken,username,password])

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
              <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='username' onClick={(e)=>{setUserName(e.target.value);console.log("username",username)}}/>
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
              <label>Password</label>
              <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="password" name='password' onClick={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='flex justify-between text-gray-400 py-2'>
              <p className='flex items-center'><input className="mr-1" type="checkbox"/> Remember password</p>
              <p>Forgot Password?</p>
            </div>
            <button className='w-full my-5 py-2 bg-[#00334E]  hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg' onClick={(e)=>{e.preventDefault();console.log("sign clicked");getAccessToken()}}>Sign In</button>
          </div>
        </div>        
      </div>
  )
}

