import React from 'react'
import DashboardD from './DashboardD'
import { useNavigate } from "react-router-dom";
export default function ViewPatient() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `../dashboardd/view-patient/prescription`; 
    navigate(path);
  }
    const data = [
        {
          name: 'John Doe',
          age: 25,
          phone: '1234567890',
          email: 'johndoe@example.com',
        },
        {
          name: 'Jane Smith',
          age: 30,
          phone: '9876543210',
          email: 'janesmith@example.com',
        },
        {
            name: 'John Doe',
            age: 25,
            phone: '1234567890',
            email: 'johndoe@example.com',
          },
          {
            name: 'Jane Smith',
            age: 30,
            phone: '9876543210',
            email: 'janesmith@example.com',
          },
          {
            name: 'John Doe',
            age: 25,
            phone: '1234567890',
            email: 'johndoe@example.com',
          },
          {
            name: 'Jane Smith',
            age: 30,
            phone: '9876543210',
            email: 'janesmith@example.com',
          },
          {
            name: 'John Doe',
            age: 25,
            phone: '1234567890',
            email: 'johndoe@example.com',
          },
          {
            name: 'Jane Smith',
            age: 30,
            phone: '9876543210',
            email: 'janesmith@example.com',
          },
      ]
  return (
    <div className='flex'>
        <DashboardD/>
    <div className="h-screen flex-1 p-7">
    <div className="container mx-auto px-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className='bg-[#00334E]'>
            <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Name</th>
            <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Age</th>
            <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Phone Number</th>
            <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-[#BDCDD6] hover:bg-[#93BFCF]' : 'hover:bg-[#93BFCF]'}
              onClick={routeChange}
            >
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.age}</td>
              <td className="py-2 px-4 border-b">{item.phone}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}
