import React from 'react'
import Medi from "../assets/medicine.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCheck)
export default function About() {
  return (
    <section className="bg-gray-100 py-8">
        <h1 className="text-4xl text-[#145374] font-sans from-neutral-500 text-center">ABOUT US</h1>
        <div className="flex justify-center">
        <div className="w-64 h-px my-8 bg-[#93BFCF]"></div>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          
          <div className="w-full md:w-1/2 pl-36">
            <div className="flex justify-center">
              <img
                className="full"
                src={Medi}
                alt="Team Member 1"
                width="500"
                height="500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pt-4 pr-40 pl-10">
            <p className="text-gray-700 leading-relaxed">
            System offers a range of functionalities:
            <br/>
            <ul>
            <li><FontAwesomeIcon icon="fa-solid fa-check" className='mr-2 text-[#00334E]' />Streamlines prescription management</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" className='mr-2 text-[#00334E]' />Simplifies medication tracking</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" className='mr-2 text-[#00334E]' />Mobile accessibility</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" className='mr-2 text-[#00334E]' />Ensures data security</li>
                <li><FontAwesomeIcon icon="fa-solid fa-check" className='mr-2 text-[#00334E]' />Simplified record-keeping</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
