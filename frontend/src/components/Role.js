import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faUser, faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom'

library.add(faUserDoctor,faUser, faHospitalUser)
export default function Role() {
  return (
    <section className="bg-white py-10">
        <h1 className="text-4xl text-[#145374] font-sans from-neutral-500 text-center">SELECT USER TYPE</h1>
        <div className="flex justify-center">
          <hr className="w-64 h-px my-8 bg-[#93BFCF]"/>
        </div>
        <div className="flex justify-between px-52 py-6">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-2 mr-2">
              <Link to="/login-doctor">
                <FontAwesomeIcon className=" text-[#5588A3] hover:text-[#93BFCF]" icon="fa-solid fa-user-doctor" size="5x" />
              </Link>
            </div>
            <span className="mt-2 text-2xl text-[#00334E]">Doctor</span>
          </div>
      
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-2 mr-2">
              <Link to="/login-patient">
                <FontAwesomeIcon className=" text-[#5588A3] hover:text-[#93BFCF]" icon="fa-solid fa-user" size="5x" />
              </Link>
            </div>
            <span className="mt-2 text-2xl text-[#00334E]">Patient</span>
          </div>
      
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-2 mr-2">
            <Link to="/login-receptionist">
              <FontAwesomeIcon className=" text-[#5588A3] hover:text-[#93BFCF]" icon="fa-solid fa-hospital-user" size="5x" />
            </Link>
            </div>
            <span className="mt-2 text-2xl text-[#00334E]">Receptionist</span>
          </div>
        </div>
      </section>
  )
}
