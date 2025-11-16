import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiExchange2Fill } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { RiExchangeDollarFill } from "react-icons/ri";

const page = () => {
  return (
    <div className='mt-[57px] mx-[8px]'>
      <div className="container">

        <div className="
          py-[24px] px-[20px] md:px-[40px] 
          flex flex-wrap md:flex-nowrap 
          items-center justify-center 
          gap-[24px] md:gap-0
          border border-[#E5E7EB] rounded-2xl
          w-full
        ">

          {/* 1 */}
          <div className="
            Shipping 
            flex items-center gap-[16px] 
            w-full sm:w-[48%] md:w-fit 
            justify-start
            pr-0 md:pr-[57px]
          ">
            <LiaShippingFastSolid className='text-[24px]' />
            <div className="text">
              <h2 className='font-poppins font-semibold text-[18px]'>Free shipping</h2>
              <p className='font-poppins font-normal text-[14px] text-[#4B5563]'>
                On orders over $50.00
              </p>
            </div>
          </div>

          {/* Divider (Desktop only) */}
          <span className='hidden md:block w-[1px] h-[50px] bg-[#E5E7EB]'></span>

          {/* 2 */}
          <div className="
            Shipping 
            flex items-center gap-[16px] 
            w-full sm:w-[48%] md:w-fit
            pl-0 md:pl-[32px] md:pr-[57px]
          ">
            <RiExchange2Fill className='text-[24px]' />
            <div className="text">
              <h2 className='font-poppins font-semibold text-[18px]'>Very easy to return</h2>
              <p className='font-poppins font-normal text-[14px] text-[#4B5563]'>
                Just phone number
              </p>
            </div>
          </div>

          {/* Divider */}
          <span className='hidden md:block w-[1px] h-[50px] bg-[#E5E7EB]'></span>

          {/* 3 */}
          <div className="
            Shipping 
            flex items-center gap-[16px]
            w-full sm:w-[48%] md:w-fit
            pl-0 md:pl-[32px] md:pr-[57px]
          ">
            <TfiWorld className='text-[24px]' />
            <div className="text">
              <h2 className='font-poppins font-semibold text-[18px]'>Worldwide delivery</h2>
              <p className='font-poppins font-normal text-[14px] text-[#4B5563]'>
                Fast delivery worldwide
              </p>
            </div>
          </div>

          {/* Divider */}
          <span className='hidden md:block w-[1px] h-[50px] bg-[#E5E7EB]'></span>

          {/* 4 */}
          <div className="
            Shipping 
            flex items-center gap-[16px]
            w-full sm:w-[48%] md:w-fit
            pl-0 md:pl-[32px] md:pr-[57px]
          ">
            <RiExchangeDollarFill className='text-[24px]' />
            <div className="text">
              <h2 className='font-poppins font-semibold text-[18px]'>Refunds policy</h2>
              <p className='font-poppins font-normal text-[14px] text-[#4B5563]'>
                60 days return for any reason
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}




export default page
