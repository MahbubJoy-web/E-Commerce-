'use client'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { FaArrowRightLong } from "react-icons/fa6";
import "./page.css"
const page = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='mt-[100px] container'>
        <div className="flex">
            <h2 className='font-poppins font-semibold text-[36px] text-[#111827]'>Start exploring.</h2>
            <p className='font-poppins font-semibold text-[36px] text-[#4B5563]'>Good things are waiting for you</p>
        </div>
      <div className="mt-[40px] slider-container">
      <Slider {...settings}>
        
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
        <div className='w-[418px] p-[40px]  h-[132px] border border-[#E5E7EB] rounded-2xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className='font-poppins font-semibold text-[24px] text-#111827'>For Men's</h2>
                    <p className='font-poppins text-[14px] text[#4B5563]'>Starting at $24</p>
                </div>
                <div className=" flex items-center gap-[8px] ">
                    <span className='w-[3px] h-[36px] bg-[#E5E7EB]'></span>
                    <p className='font-poppins font-medium text-[14px] text-[#4B5563]'>Shop Now</p>
                    <FaArrowRightLong className='text-[16px] text-[#4B5563]'/>
                </div>
            </div>
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default page
