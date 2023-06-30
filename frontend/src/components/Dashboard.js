import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from '../assets/arrowleft.png';
import Logo from '../assets/logo.png';
import Add from '../assets/Add.png';
import Update from '../assets/pencil.png';
import Delete from '../assets/bin.png';
import Settings from '../assets/cogwheel.png';
import Dashboard1 from '../assets/dashboard.png';
import { useState } from 'react';

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: Dashboard1, link: '/' },
    { title: 'Add patient', src: Add, gap: true, link: '/dashboard/add-patient' },
    { title: 'Update Patient', src: Update, link: '/dashboard/update-patient' },
    { title: 'Delete Patient', src: Delete, link: '/dashboard/delete-patient' },
    { title: 'Add Doctor', src: Add, gap: true, link: '/dashboard/add-doctor' },
    { title: 'Update Doctor', src: Update, link: '/dashboard/update-doctor' },
    { title: 'Delete Doctor', src: Delete, link: '/dashboard/delete-doctor' },
    { title: 'Settings', src: Settings, gap: true, link: '/dashboard/settings' },
  ];

  return (
    
      <div
        className={` ${
          open ? 'w-60' : 'w-20 '
        } bg-[#00334E] h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={LeftArrow}
          alt="A"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#00334E]
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            alt="MT"
            className={`cursor-pointer duration-500 h-10 w-10 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            MediTrack
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#145374] text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <Link to={Menu.link} className="flex items-center">
                <img src={Menu.src} className="w-5 mr-2" alt="" />
                <span className={`${!open && 'hidden'} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    
  );
}
