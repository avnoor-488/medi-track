import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateDoctorData } from '../store/slices/doctorDataSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddDoctor() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const doctorData = useSelector((state) => state.doctorData.data);
    const [doctorsDatalist, setDoctorsDataList] = useState();
    const [updateDoctorId, setUpdateDoctorId] = useState();
    const receptionistToken = useSelector((state) => state.receptionist.token);

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
        if (workingDays.includes(day.label)) {
            setWorkingDays(workingDays.filter((workingDay) => workingDay !== day.label));
        } else {
            setWorkingDays([...workingDays, day.label]);
        }


    };


    // const inputHandler = (e) => {
    //     let name = e.target.name;
    //     let val = e.target.value;
    //     console.log(dispatch(setDoctorData({ ...doctorData, [name]: val })));
    // }


    // const createDoctor = async () => {
    //     await axios.post("http://localhost:8000/api/doctors/", doctorData, {
    //         headers: {
    //             'Authorization': `Bearer ${receptionistToken}`
    //         }
    //     })
    //         .then(response => {
    //             // handle your response here
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             // handle error
    //             console.log(error);
    //         });
    // }

    useEffect(() => {
        console.log("workingDays", workingDays);
        console.log(dispatch(setUpdateDoctorData({ ...doctorData, working_days: workingDays })));

    }, [workingDays])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/doctors/", {
                    headers: {
                        'Authorization': `Bearer ${receptionistToken}`
                    }
                });
                console.log(response.data);
                setDoctorsDataList(response.data);
                // setPatientsData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex'>
            <Dashboard />
            {typeof doctorsDatalist === "undefined" ? <></> :
                <div className="h-screen flex-1 p-7">
                    <div className="container mx-auto px-4">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className='bg-[#00334E]'>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Name</th>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Speciality</th>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Age</th>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Number</th>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Email Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {typeof doctorsDatalist === "undefined" ? <></> : doctorsDatalist.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? 'bg-[#BDCDD6] hover:bg-[#93BFCF] cursor-pointer' : 'hover:bg-[#93BFCF] cursor-pointer'}
                                        onClick={() => { navigate(`/dashboard-receptionist/update-doctor/${item.id.substring(0, item.id.indexOf("-"))}`); console.log("full name pressed"); console.log(dispatch(setUpdateDoctorData(doctorsDatalist[index]))) }}
                                    >
                                        <td className="py-2 px-4 border-b " >{item.full_name}</td>
                                        <td className="py-2 px-4 border-b">{item.speciality}</td>
                                        <td className="py-2 px-4 border-b">{item.doctor_age}</td>
                                        <td className="py-2 px-4 border-b">{item.phone_number}</td>
                                        <td className="py-2 px-4 border-b">{item.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div >
    );
}