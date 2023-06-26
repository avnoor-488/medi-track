import React from 'react';
import LeftArrow from '../assets/arrowleft.png'
import Logo from '../assets/logo.png'
import { useState } from "react";
export default function Dashboard() {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: "Chart_fill" },
      { title: "Add patient", src: "Chat" ,gap:true},
      { title: "Update Patient", src: "User" },
      { title: "Delete Patient ", src: "Calendar" },
      { title: "Add Doctor", src: "Search", gap:true },
      { title: "Update Doctor", src: "Chart" },
      { title: "Delete Doctor ", src: "Folder"},
      { title: "Settings", src: "Setting" ,gap:true },
    ];
  
    return (
      <div className="flex">
        <div
          className={` ${
            open ? "w-60" : "w-20 "
          } bg-[#00334E] h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src={LeftArrow}
            alt='A'
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#00334E]
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={Logo}
              alt='MT'
              className={`cursor-pointer duration-500 h-10 w-10 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              MediTrack
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`./src/assets/${Menu.src}.png`} alt=''/>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div>
      </div>
  );
}
