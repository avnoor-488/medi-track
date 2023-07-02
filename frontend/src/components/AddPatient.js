import React,{useEffect} from 'react'
import Dashboard from './Dashboard'
import { useSelector,useDispatch } from 'react-redux';
import { setPatientData } from '../store/slices/patientDataSlice';
import axios from 'axios';


export default function AddPatient() {
  const dispatch = useDispatch();
  const patientData = useSelector((state)=>state.patientData.data);
  const receptionistToken = useSelector((state)=>state.receptionist.token);

  const inputHandler = (e) =>{
    let name = e.target.name;
    let val = e.target.value;
    console.log(dispatch(setPatientData({ [name]: val})));
  }
  const createPatient =  async () => {
    await axios.post("http://localhost:8000/api/patients/", patientData, {
      headers: {
          'Authorization': `Bearer ${receptionistToken}`
      }
  })
  .then(response => {
      // handle your response here
      console.log(response.data);
  })
  .catch(error => {
      // handle error
      console.log(error);
  });  }

  useEffect(()=>{
    console.log("partientData",patientData);
  },[patientData])

  return (
    <div className='flex'>
      <Dashboard />
      <div className="h-screen flex-1 p-7">
        <div className='max-w-[600px] w-full mx-auto bg-[#145374] p-8 px-8 rounded-lg'>
          <h2 className='text-3xl font-bold text-gray-400 text-center mb-4'>PATIENT DETAILS</h2>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Full Name</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' defaultValue={typeof patientData!=="undefined" && patientData.full_name!==undefined ? patientData.full_name : ""} type="text" name='full_name' onChange={inputHandler}/>
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>User Name</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='username' defaultValue={typeof patientData!=="undefined" && patientData.username!==undefined ? patientData.username : ""} onChange={inputHandler}/>
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Phone Number</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="tel" name='phone_number' defaultValue={typeof patientData!=="undefined" && patientData.phone_number!==undefined ? patientData.phone_number : ""} onChange={inputHandler}/>
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Email Address</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="email" name='email' defaultValue={typeof patientData!=="undefined" && patientData.email!==undefined ? patientData.email : ""} onChange={inputHandler}/>
              </div>
              
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Blood Group</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='blood_group' defaultValue={typeof patientData!=="undefined" && patientData.blood_group!==undefined ? patientData.blood_group : ""} onChange={inputHandler}/>
              </div>
              {/* <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Doctor Assigned</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='doctor_assigned' defaultValue={typeof patientData!=="undefined" && patientData.doctor_assigned!==undefined ? patientData.doctor_assigned : ""} onChange={inputHandler}/>
              </div> */}
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Patient's Age</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="number" name='patient_age' defaultValue={typeof patientData!=="undefined" && patientData.patient_age!==undefined ? patientData.patient_age : ""} onChange={inputHandler}/>
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label className='text-gray-400'>Address</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="textarea" name='address'  defaultValue={typeof patientData!=="undefined" && patientData.address!==undefined ? patientData.address : ""} onChange={inputHandler}/>
          </div>
          {/* <div className='flex flex-col text-gray-100 py-2'>
            <label className='text-gray-400'>Username</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='username' defaultValue={typeof patientData!=="undefined" && patientData.username!==undefined ? patientData.username : ""} onChange={inputHandler}/>
          </div> */}
          <button className='w-full my-5 py-2 bg-[#00334E] hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg' onClick={createPatient}>Add</button>
        </div>

      </div>
    </div>
  )
}