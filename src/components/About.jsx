import React from 'react'
import company from '../assets/Company-amico.svg';

const About = () => {
    return (
        <div className='font-[Montserrat] my-14'>
            <div className='max-w-[1240px]  mx-auto'>
                <div>
                    <h1 className='font-[700] text-3xl py-4 tracking-wider mt-6'>About</h1>
                    <div className='grid md:grid-cols-2'>

                        <div  data-aos="fade-right" data-aos-duration="1500" className='p-10'>
                            <h1 className=' text-xl font-bold mt-16'>Who we are</h1>
                            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi excepturi sint iste dolores delectus culpa dolor nemo! Omnis molestias eius pariatur sit, dolores totam, ut distinctio atque inventore velit ipsam. Reiciendis ratione, fugiat cumque ipsam vitae voluptate impedit nesciunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam fuga cum quisquam suscipit ullam provident eveniet impedit odio vitae!</p>
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi excepturi sint iste dolores delectus culpa dolor nemo! Omnis molestias eius pariatur sit, dolores totam, ut distinctio atque inventore velit ipsam. Reiciendis ratione, fugiat cumque ipsam vitae voluptate impedit nesciunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum totam fuga cum quisquam suscipit ullam provident eveniet impedit odio vitae!</p>
                        </div>
                        <div>
                            <img src={company} data-aos="fade-left" data-aos-duration="1500" className='p-10' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About