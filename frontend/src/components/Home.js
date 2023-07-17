import React from 'react'
import doctor from "../assets/doctor.jpg"
export default function Home() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <img src={doctor} alt="myimg" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 pl-5 pr-16 mb-6 flex flex-col justify-center items-center">
            <h1 className="text-5xl text-[#145374] font-sans from-neutral-500 mb-1 text-justify">PRESCRIPTION</h1>
            <h3 className="text-4xl text-slate-400 font-sans font-semibold mb-7 text-justify">Management</h3>
            <p className="text-[#5588A3] text-justify">Streamline prescription management in your hospital with our comprehensive Prescription Management System. From patient information management to doctor assignments and prescription tracking, our intuitive platform simplifies the process and enhances collaboration between healthcare professionals. Experience improved efficiency and patient care with our tailored solution.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
