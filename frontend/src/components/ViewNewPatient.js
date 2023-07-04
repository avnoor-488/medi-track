import React, { useEffect, useState } from 'react'
import DashboardDoctor from './DashboardDoctor'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ViewPatient() {
    // const data = [
    //     {
    //         full_name: 'John Doe',
    //         patient_age: 25,
    //         phone_number: '1234567890',
    //         email: 'johndoe@example.com',
    //     },
    //     {
    //         full_name: 'Jane Smith',
    //         patient_age: 30,
    //         phone_number: '9876543210',
    //         email: 'janesmith@example.com',
    //     },
    //     {
    //         full_name: 'John Doe',
    //         patient_age: 25,
    //         phone_number: '1234567890',
    //         email: 'johndoe@example.com',
    //     },
    //     {
    //         full_name: 'Jane Smith',
    //         patient_age: 30,
    //         phone_number: '9876543210',
    //         email: 'janesmith@example.com',
    //     },
    //     {
    //         full_name: 'John Doe',
    //         patient_age: 25,
    //         phone_number: '1234567890',
    //         email: 'johndoe@example.com',
    //     },
    //     {
    //         full_name: 'Jane Smith',
    //         patient_age: 30,
    //         phone_number: '9876543210',
    //         email: 'janesmith@example.com',
    //     },
    //     {
    //         full_name: 'John Doe',
    //         patient_age: 25,
    //         phone_number: '1234567890',
    //         email: 'johndoe@example.com',
    //     },
    //     {
    //         full_name: 'Jane Smith',
    //         patient_age: 30,
    //         phone_number: '9876543210',
    //         email: 'janesmith@example.com',
    //     },
    // ]

    const [patientsData, setPatientsData] = useState();
    // const navigate = useNavigate();
    const doctorToken = useSelector((state) => state.doctor.token);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/doctor/patients/", {
                    headers: {
                        'Authorization': `Bearer ${doctorToken}`
                    }
                });
                console.log(response.data);
                setPatientsData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    // useEffect(() => {
    //     if (!doctorToken) {
    //         navigate('/login-doctor');
    //     }
    // }, []);


    return (
        <div className='flex'>
            <DashboardDoctor />
            {typeof patientsData === "undefined" ? <></> :
                <div className="h-screen flex-1 p-7">
                    <div className="container mx-auto px-4">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className='bg-[#00334E]'>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">full_name</th>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">patient_age</th>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">phone_number Number</th>
                                    <th className="py-2 px-4 border-b text-left text-[#E8E8E8]">Email Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {typeof patientsData === "undefined" ? <></> : patientsData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? 'bg-[#BDCDD6] hover:bg-[#93BFCF]' : 'hover:bg-[#93BFCF]'}
                                    >
                                        <td className="py-2 px-4 border-b cursor-pointer" onClick={() => console.log("full name pressed", item.full_name)}>{item.full_name}</td>
                                        <td className="py-2 px-4 border-b">{item.patient_age}</td>
                                        <td className="py-2 px-4 border-b">{item.phone_number}</td>
                                        <td className="py-2 px-4 border-b">{item.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>}

        </div>
    )
}
