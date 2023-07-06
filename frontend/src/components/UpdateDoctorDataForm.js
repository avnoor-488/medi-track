import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateDoctorData } from '../store/slices/doctorDataSlice';

import axios from 'axios';
export default function UpdateDoctorDataForm() {
    const dispatch = useDispatch();
    const doctorData = useSelector((state) => state.doctorData.doctorUpdateData);
    const receptionistToken = useSelector((state) => state.receptionist.token);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [workingDays, setWorkingDays] = useState([]);

    const toggleWorkingDay = (day) => {
        if (workingDays.includes(day.label)) {
            setWorkingDays(workingDays.filter((workingDay) => workingDay !== day.label));
        } else {
            setWorkingDays([...workingDays, day.label]);
        }
    };

    const inputHandler = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        console.log(dispatch(setUpdateDoctorData({ ...doctorData, [name]: val })));
    }

    const workingDaysOptions = [
        { id: 1, label: 'Monday' },
        { id: 2, label: 'Tuesday' },
        { id: 3, label: 'Wednesday' },
        { id: 4, label: 'Thursday' },
        { id: 5, label: 'Friday' },
        { id: 6, label: 'Saturday' },
        { id: 7, label: 'Sunday' },
    ];


    const updateDoctor = async () => {
        await axios.put(`http://localhost:8000/api/doctors/${doctorData.id}/`, doctorData, {
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
            });
    }

    useEffect(() => {
        console.log("token", receptionistToken)
        // const workingDaysString = doctorData.working_days.join('');
        // console.log(dispatch(setUpdateDoctorData({ ...doctorData, working_days: workingDaysString })));
        console.log("workingDat", doctorData);
    }, [])


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
                                    defaultValue={typeof doctorData !== "undefined" && doctorData.full_name !== undefined ? doctorData.full_name : ""}
                                    onChange={inputHandler}
                                    name='full_name'
                                />                            </div>
                            <div className='w-1/2 pl-2'>
                                <label className='text-gray-400'>Email Address</label>
                                <input
                                    className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                                    type='email'
                                    defaultValue={typeof doctorData !== "undefined" && doctorData.email !== undefined ? doctorData.email : ""}
                                    onChange={inputHandler}
                                    name='email'
                                />                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-gray-100 py-2'>
                        <div className='flex'>
                            <div className='w-1/2 pr-2'>
                                <label className='text-gray-400'>Phone Number</label>
                                <input
                                    className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                                    type='tel'
                                    defaultValue={typeof doctorData !== "undefined" && doctorData.phone_number !== undefined ? doctorData.phone_number : ""}
                                    onChange={inputHandler}
                                    name='phone_number'
                                />
                            </div>
                            <div className='w-1/2 pl-2'>
                                <label className='text-gray-400'>Doctor's Age</label>
                                <input
                                    className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                                    type='number'
                                    defaultValue={typeof doctorData !== "undefined" && doctorData.doctor_age !== undefined ? doctorData.doctor_age : ""}
                                    onChange={inputHandler}
                                    name='doctor_age'
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
                                    defaultValue={typeof doctorData !== "undefined" && doctorData.blood_group !== undefined ? doctorData.blood_group : ""}
                                    onChange={inputHandler}
                                    name='blood_group'
                                />
                            </div>
                            <div className='w-1/2 pl-2'>
                                <label className='text-gray-400'>Medical Degree</label>
                                <input
                                    className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                                    type='text'
                                    defaultValue={typeof doctorData !== "undefined" && doctorData.medical_degree !== undefined ? doctorData.medical_degree : ""}
                                    onChange={inputHandler}
                                    name='medical_degree'
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
                                            {workingDays.length === 0 ? 'Select days' : workingDays.join(', ')}
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
                                                        checked={workingDays.includes(day.label)}
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
                                    defaultValue={typeof doctorData !== "undefined" && doctorData.speciality !== undefined ? doctorData.speciality : ""}
                                    onChange={inputHandler}
                                    name='speciality'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col text-gray-100 py-2'>
                        <label className='text-gray-400'>Address</label>
                        <input
                            className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                            type='textarea'
                            defaultValue={typeof doctorData !== "undefined" && doctorData.address !== undefined ? doctorData.address : ""}
                            onChange={inputHandler}
                            name='address'
                        />
                        <label className='text-gray-400 mt-2' >UserName</label>
                        <input
                            className='rounded-lg bg-[#5588A3] mt-2 p-2 focus:border-blue-500 focus:bg-[#00334E] focus:outline-none'
                            type='textarea'
                            defaultValue={typeof doctorData !== "undefined" && doctorData.username !== undefined ? doctorData.username : ""}
                            onChange={inputHandler}
                            name='username'
                        />
                    </div>
                    <button className='w-full my-5 py-2 bg-[#00334E] hover:bg-[#93BFCF] hover:text-[#00334E] text-gray-400 font-semibold rounded-lg' onClick={updateDoctor}>
                        Add
                    </button>
                </div>
            </div>

        </div>
    )
}
