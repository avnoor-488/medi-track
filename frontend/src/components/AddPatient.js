import React from 'react'
import Dashboard from './Dashboard'

export default function AddPatient() {

  
  // const createPatient =  async () => {

  // }

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
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='fullName'/>
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Email Address</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="email" name='email'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Phone Number</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="tel" name='phoneNumber'/>
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Patient's Age</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="number" name='age' />
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Blood Group</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='bloodGroup'/>
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Doctor Assigned</label>
                <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='doctor-assigned'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label className='text-gray-400'>Address</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="textarea" name='address' />
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label className='text-gray-400'>Username</label>
            <input className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none' type="text" name='username' />
          </div>
          <button className='w-full my-5 py-2 bg-[#00334E] hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg'>Add</button>
        </div>

      </div>
    </div>
  )
}