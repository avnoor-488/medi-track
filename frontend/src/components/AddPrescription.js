import React from 'react'
import { useState } from 'react';
import DashboardD from './DashboardD'
export default function AddPrescription() {
    const [prescriptions, setPrescriptions] = useState([]);
  
    const handleAddPrescription = () => {
      setPrescriptions([...prescriptions, {}]);
    };
  
    const handleDeletePrescription = (index) => {
      const updatedPrescriptions = prescriptions.filter((_, i) => i !== index);
      setPrescriptions(updatedPrescriptions);
    };
  
    const handleChange = (event, index) => {
      const { name, value } = event.target;
      const updatedPrescriptions = [...prescriptions];
      updatedPrescriptions[index][name] = value;
      setPrescriptions(updatedPrescriptions);
    };
  return (
    <div className='flex'>
        <DashboardD/>
        <div className="h-screen flex-1 p-7">
        <div className="bg-[#E8E8E8] p-2 rounded-md shadow-md">
        <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <p className=" text-gray-700 text-sm font-bold ml-8 mr-2">Name:</p>
            <p className="text-gray-700">abcd</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 text-sm font-bold ml-8 mr-2">Age:</p>
            <p className="text-gray-700">25</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <p className="text-gray-700 text-sm font-bold mr-2 ">Phone Number:</p>
            <p className="text-gray-700">1234567890</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-700 text-sm font-bold mr-2">Email Address:</p>
            <p className="text-gray-700">example@example.com</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div>
      <table className="table-auto w-full mt-6">
        <thead>
          <tr>
            <th className="text-[#145374] px-4 py-2">Medication Name</th>
            <th className="text-[#145374] px-4 py-2">Dosage</th>
            <th className="text-[#145374] px-4 py-2">Route</th>
            <th className="text-[#145374] px-4 py-2">Frequency</th>
            <th className="text-[#145374] px-4 py-2">Number of Days</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  name="medicationName"
                  value={prescription.medicationName || ''}
                  onChange={(event) => handleChange(event, index)}
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  name="dosage"
                  value={prescription.dosage || ''}
                  onChange={(event) => handleChange(event, index)}
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  name="route"
                  value={prescription.route || ''}
                  onChange={(event) => handleChange(event, index)}
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  name="frequency"
                  value={prescription.frequency || ''}
                  onChange={(event) => handleChange(event, index)}
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  name="numberOfDays"
                  value={prescription.numberOfDays || ''}
                  onChange={(event) => handleChange(event, index)}
                  className="border border-gray-300 px-2 py-1 w-full"
                />
              </td>
              <td className="border px-4 py-2">
                <button
                  type="button"
                  onClick={() => handleDeletePrescription(index)}
                  className="bg-[#145374] text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleAddPrescription}
        className="bg-[#145374] text-white mt-2 px-3 py-1 rounded"
      >
        Add Prescription
      </button>
    </div>
        </div>
    </div>
  )
}
