import React from 'react'

export default function Navbar() {
  return (
    <header className="bg-[#145374] h-14 sticky top-0 z-10">
        <nav className="flex items-center justify-between py-3 sticky top-0 z-10">
          <a href="/" className="text-[#E8E8E8] font-bold text-2xl px-6">MediTrack</a>
          <ul className="flex space-x-6 px-6">
            <li><a href="/" className=" font-semibold text-[#E8E8E8] hover:bg-[#5588A3] hover:rounded-xl hover:p-1">About</a></li>
            <li><a href="/" className=" font-semibold text-[#E8E8E8] hover:bg-[#5588A3] hover:rounded-xl hover:p-1">Services</a></li>
            <li><a href="/" className="font-semibold text-[#E8E8E8] hover:bg-[#5588A3] hover:rounded-xl hover:p-1">Contact</a></li>
          </ul>
        </nav>
      </header>
  )
}
