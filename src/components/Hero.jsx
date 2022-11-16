import React from 'react'
import Leads from '../assets/hero2.webp'

const Hero = () => {
    return (
        <div className='items-center mb-6'>
            <h1 className='text-white h-12 py-2 bg-black text-base font-bold'>SALE STYLES UP TO 50% OFF</h1>
            <div className='font-[Montserrat] flex flex-col justify-center items-center w-full relative overflow-hidden'>
                <img src={Leads} data-aos="zoom-out" data-aos-duration="2000" className='w-full bg-cover' alt="" />
                <div className='absolute mt-6'>
                    {/* <h1 className='text-4xl font-bold text-white shadow-sm'>Never Low your Standard</h1> */}
                    <button data-aos="fade-down"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"data-aos-duration="1000" className=' bg-black text-white px-4 py-2 tracking-widest font-bold uppercase mt-[5rem] hover:bg-[#F2506A] '>Get Started</button>
                </div>
            </div>
        </div>

    )
}

export default Hero