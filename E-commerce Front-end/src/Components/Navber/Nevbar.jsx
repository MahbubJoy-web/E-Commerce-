import React from 'react'
import logo from '../../assets/Image/Vector.png'
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from 'react-router-dom'
import { TbCreditCardPay } from 'react-icons/tb'
import { AiTwotoneShop } from "react-icons/ai";
import { BsInboxes } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiAddToQueue } from "react-icons/bi";

const Nevber = () => {
  return (
    <div className='px-[25px] pt-[32px]'>
      <div className="Logo flex items-center gap-5 pb-8">
        <img src={logo} alt="logo" />
        <h2 className='poppins font-semibold text-[#9A9AAF] text-[24px]'>Frox</h2>
      </div>
      <div className="menu py-[25px]">
        <ul>
          <li className='flex items-center gap-[10px] py-[15px] pl-[21px] pr-[50px] rounded-[8px] text-[#7E7E8F] hover:bg-[#7364DB] hover:text-[#fff] duration-[0.2s] '>
            <LuLayoutDashboard className='text-[22px]'/>
            <Link to={''} className='font-poppins font-semibold text-[14px] '>Dashboard</Link>
          </li>
          <li className='flex items-center gap-[10px] py-[15px] pl-[21px] pr-[50px] rounded-[8px] text-[#7E7E8F] hover:bg-[#7364DB] hover:text-[#fff] duration-[0.2s] '>
            <BsInboxes className='text-[22px]'/>
            <Link to={''} className='font-poppins font-semibold text-[14px]'>Orders</Link>
          </li>
          <li className='flex items-center gap-[10px] py-[15px] pl-[21px] pr-[50px] rounded-[8px] text-[#7E7E8F] hover:bg-[#7364DB] hover:text-[#fff] duration-[0.2s] '>
            <AiTwotoneShop className='text-[22px]'/>
            <Link to={''} className='font-poppins font-semibold text-[14px]'>Payments</Link>
          </li>
          <li className='flex items-center gap-[10px] py-[15px] pl-[21px] pr-[50px] rounded-[8px] text-[#7E7E8F] hover:bg-[#7364DB] hover:text-[#fff] duration-[0.2s] '>
            <TbCreditCardPay className='text-[22px]'/>
            <Link to={''} className='font-poppins font-semibold text-[14px]'>Transactions</Link>
          </li>
          <li className='flex items-center gap-[10px] py-[15px] pl-[21px] pr-[50px] rounded-[8px] text-[#7E7E8F] hover:bg-[#7364DB] hover:text-[#fff] duration-[0.2s] '>
            <HiOutlineUsers className='text-[20px]'/>
            <Link to={''} className='font-poppins font-semibold text-[14px] '>Clients</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-[1px] bg-[#E8EDF2]"></div>
      
      <div className="Categories py-[21px]">
        <h2 className='py-[12px] pl-[12px] pr-[132px] text-[14px] font-semibold'>Categories</h2>
        <ul className='py-[12px] pl-[24px] pr-[20px] text-[#7E7E8F]'>
          <div className="py-[12px]">
            <li><Link to={'Laptops '} className='flex items-center justify-between '>Laptops
              <div className="w-[20px] h-[20px] rounded-[4px] bg-[#ECE663] flex items-center justify-center">
                <p className='text-[#07070C] text-[14px] font-medium'>6</p>
              </div>
            </Link></li> 
          </div>
          <div className="py-[12px]">
            <li><Link to={'Laptops '} className='flex items-center justify-between '>Mobile phones
              <div className="w-[20px] h-[20px] rounded-[4px] bg-[#EC8C56] flex items-center justify-center">
                <p className='text-[#07070C] text-[14px] font-medium'>4</p>
              </div>
            </Link></li> 
          </div>
          <div className="py-[12px]">
            <li><Link to={'Laptops '} className='flex items-center justify-between '>Desktops
              <div className="w-[20px] h-[20px] rounded-[4px]  flex items-center justify-center">
                <p className='text-[#07070C] text-[14px] font-medium'>8</p>
              </div>
            </Link></li> 
          </div>
          <div className="py-[12px]">
            <li><Link to={'Laptops '} className='flex items-center justify-between '>Accessories
              <div className="w-[20px] h-[20px] rounded-[4px] bg-[#FB7BB8] flex items-center justify-center">
                <p className='text-[#07070C] text-[14px] font-medium'>8</p>
              </div>
            </Link></li> 
          </div>
          <div className="py-[12px]">
            <li><Link to={'Laptops '} className='flex items-center justify-between '>Portable storage
              <div className="w-[20px] h-[20px] rounded-[4px] bg-[#50D1B2] flex items-center justify-center">
                <p className='text-[#07070C] text-[14px] font-medium'>5</p>
              </div>
            </Link></li> 
          </div>
          <div className="py-[12px]">
            <li><Link to={'Laptops '} className='flex items-center justify-between '>Networking
              <div className="w-[20px] h-[20px] rounded-[4px] bg-[] flex items-center justify-center">
                <p className='text-[#07070C] text-[14px] font-medium'>8</p>
              </div>
            </Link></li> 
          </div>
          <div className="add catagory my-3">
            <button className='text-[#000] flex items-center gap-[12px] font-semibold text-[12px]'><BiAddToQueue className='text-[18px] text-[#7E7E8F]'/>Add category</button>
          </div>
        </ul>
              <div className="w-full h-[1px] bg-[#E8EDF2]"></div>
      </div>
    </div>
  )
}

export default Nevber
