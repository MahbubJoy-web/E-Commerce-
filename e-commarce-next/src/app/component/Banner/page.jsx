'use client'
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "./page.css"
import Image from 'next/image';
import banner1 from "../../../../public/hero-bg.png"

const page = () => {

    const settings = {
        dots: true,
        arrows: false, // hide arrows via settings (preferred)
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

  return (
    <div className="bg-gray-50">
    <div className='container '>
        <Slider {...settings}>
            <div>
                <section className="w-full py-10 md:py-16">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                        {/* Left Text Section */}
                        <div className="max-w-xl space-y-5 text-center md:text-left">
                        <p className="text-gray-500 text-sm font-medium">
                            Starting from: <span className="font-semibold text-gray-700">$49.99</span>
                        </p>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Exclusive collection <br /> for everyone
                        </h1>

                        <button className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium py-3 px-6 rounded-full hover:bg-gray-800 transition-all shadow-md">
                            Explore now
                            
                        </button>
                        </div>

                        {/* Right Image Section */}
                        <div className="mt-10 md:mt-0 relative">
                        <div className="absolute inset-0 rounded-full bg-gray-100 w-[400px] h-[400px] md:w-[480px] md:h-[480px] z-0 mx-auto mt-8"></div>
                        <Image
                            src={banner1}// 👉 replace with your image
                            alt="Exclusive Collection"
                            width={450}
                            height={450}
                            className="relative z-10 object-contain"
                        />
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <h3>Slider 2</h3>
            </div>
         </Slider>
    </div>
    </div>
  )
}

export default page
