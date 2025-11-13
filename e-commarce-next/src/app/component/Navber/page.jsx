"user client"
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../../../public/logo (1).png"
import Image from 'next/image';

const page = () => {
  return (
    <div className="w-full bg-white shadow-sm border-b border-gray-100">
        <div className="container">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                <Image src={Logo} alt='Logo' />
                </div>


                {/* Search Bar */}
                <div className="relative w-[400px] bg-[#F8F8F8] rounded-full border-none">
                <input
                type="text"
                placeholder="Search in products..."
                className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 outline-none "
                />
                <IoIosSearch  className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>


                {/* Icons */}
                <div className="flex items-center space-x-5">
                <button className="text-gray-700 hover:text-blue-600 transition">
                <FaRegUser/>
                </button>
                <button className="relative text-gray-700 hover:text-blue-600 transition">
                <TiShoppingCart />
                <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
                </span>
                </button>
                </div>
                </div>
        </div>
    </div>
  )
}

export default page
