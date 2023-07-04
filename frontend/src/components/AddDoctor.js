import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';

export default function AddDoctor() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [workingDays, setWorkingDays] = useState([]);

  const workingDaysOptions = [
    { id: 1, label: 'Monday' },
    { id: 2, label: 'Tuesday' },
    { id: 3, label: 'Wednesday' },
    { id: 4, label: 'Thursday' },
    { id: 5, label: 'Friday' },
    { id: 6, label: 'Saturday' },
    { id: 7, label: 'Sunday' },
  ];

  const toggleWorkingDay = (day) => {
    if (workingDays.some((workingDay) => workingDay.id === day.id)) {
      setWorkingDays(workingDays.filter((workingDay) => workingDay.id !== day.id));
    } else {
      setWorkingDays([...workingDays, day]);
    }
  };

  return (
    <div className='flex'>
      <Dashboard />
      <div className='h-screen flex-1 p-7'>
        <div className='max-w-[600px] w-full mx-auto bg-[#145374] p-8 px-8 rounded-lg'>
          <h2 className='text-3xl font-bold text-gray-400 text-center mb-4'>DOCTOR DETAILS</h2>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Full Name</label>
                <input
                  className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                  type='text'
                />
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Email Address</label>
                <input
                  className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                  type='email'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Phone Number</label>
                <input
                  className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                  type='tel'
                />
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Doctor's Age</label>
                <input
                  className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                  type='number'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Blood Group</label>
                <input
                  className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                  type='text'
                />
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Medical Degree</label>
                <input
                  className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                  type='text'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <div className='flex'>
              <div className='w-1/2 pr-2'>
                <label className='text-gray-400'>Working Days</label>
                <div className='relative'>
                  <div
                    className='rounded-lg bg-[#5588A3] mt-2 p-2 flex items-center justify-between focus:border-blue-500 focus:bg-[#00334E] focus:outline-none cursor-pointer'
                    style={{ minHeight: '40px' }}
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <span>
                      {workingDays.length === 0 ? 'Select days' : workingDays.map((day) => day.label).join(', ')}
                    </span>
                    <FontAwesomeIcon icon={faChevronDown} className={`text-gray-100 ${openDropdown ? 'transform rotate-180' : ''}`} />
                  </div>
                  {openDropdown && (
                    <div
                      className='absolute bg-[#5588A3] mt-2 p-2 left-0 right-0 overflow-auto max-h-48 rounded-lg'
                      style={{ zIndex: 1 }}
                    >
                      {workingDaysOptions.map((day) => (
                        <label key={day.id} className='flex items-center py-1'>
                          <input
                            type='checkbox'
                            className='mr-2'
                            checked={workingDays.some((workingDay) => workingDay.id === day.id)}
                            onChange={() => toggleWorkingDay(day)}
                          />
                          <span className='text-gray-100'>{day.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className='w-1/2 pl-2'>
                <label className='text-gray-400'>Specialization</label>
                <input
                  className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                  type='text'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col text-gray-100 py-2'>
            <label className='text-gray-400'>Address</label>
            <input
              className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
              type='textarea'
            />
          </div>
          <button className='w-full my-5 py-2 bg-[#00334E] hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg'>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
