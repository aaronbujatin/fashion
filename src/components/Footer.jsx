import {
    FaLinkedinIn,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#1C1C1C] font-[Montserrat]'>
            <div className='max-w-[1240px] mx-auto font-poppins grid lg:grid-cols-3 pt-16'>
                <div className='lg:col-span-2 p-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-4 text-white'>Want tips & tricks to optimize your flow?</h1>
                    <p className='text-white'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-2 p-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='py-2 px-2 hover:outline-2 outline-[#F2506A] border border-[gray] font-medium flex w-full rounded-md text-black'
                            type="email" placeholder='Enter your email' />
                        <button className='bg-[#F2506A] py-2 px-2 text-white rounded-lg w-[150px] font-bold ml-4 my-6'>Notify me</button>
                    </div>
                    <p className='text-white'>We care about the protection of your data. Read our <span className='text-[#F2506A]'>Privacy Policy</span>.</p>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cols-3 gap-8 text-white font-poppins '>
                <div className='flex flex-col justify-start'>
                    <h1 className='text-[3rem] w-full text-[#F2506A]'>Fashion Step</h1>
                    <p className='px-6 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores hic illum dolor? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, autem.</p>
                    <div className='flex md:[75%] my-4 space-x-4 justify-center '>
                        <FaFacebookSquare size={25} />
                        <FaInstagramSquare size={25} />
                        <FaTwitterSquare size={25} />
                        <FaGithubSquare size={25} />
                        <FaLinkedinIn size={25} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between'>
                    <div className=''>
                        <h3 className='font-bold text-xl'>Solutions</h3>
                        <ul>
                            <li className='py-2 hover:text-[#00df9a] '>Analytics</li>
                            <li className='py-2'>Company</li>
                            <li className='py-2'>Commerce</li>
                            <li className='py-2'>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-xl'>Support</h3>
                        <ul>
                            <li className='py-2'>Pricing </li>
                            <li className='py-2'>Documentation</li>
                            <li className='py-2'>Guide</li>
                            <li className='py-2'>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-xl'>Company</h3>
                        <ul>
                            <li className='py-2'>About</li>
                            <li className='py-2'>Blog</li>
                            <li className='py-2'>Jobs</li>
                            <li className='py-2'>Press</li>
                            <li className='py-2'>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-bold text-xl'>Legal</h3>
                        <ul>
                            <li className='py-2'>Policy</li>
                            <li className='py-2'>Claim</li>
                            <li className='py-2'>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer