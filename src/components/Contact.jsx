import React from 'react'


const Contact = () => {
  return (
    <div className='font-[Montserrat]  my-16'>
      <div className='max-w-[1240px] mx-auto '>
        <h1 className='font-[700] text-3xl py-4 tracking-wider py-10'>Contact us</h1>
        <div className='grid grid-cols-2'>
          <div className='overflow-hidden '>
           <img src="https://images.pexels.com/photos/1770193/pexels-photo-1770193.jpeg?auto=compress&cs=tinysrgb&w=1600" className='my-[-10rem]' alt="" />
          </div>
          <div>
            <div class="flex bg-gray-200 items-center justify-center w-full">
              <div class="grid bg-white rounded-lg shadow-xl w-full ">
                <div class="flex justify-center">
                  <div class="flex">
                    <h1 class="text-gray-600 font-bold md:text-2xl text-xl mt-6">Get in touch</h1>
                  </div>
                </div>
                <div class="grid grid-cols-1 mt-5 mx-7">
                  <label class=" md:text-sm text-xs text-gray-800 text-light font-semibold flex justify-start">Email</label>
                  <input class="py-2 px-3 rounded-lg border border-gray-400 bg-gray-50 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" type="text" placeholder="Enter your email" />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                  <div class="grid grid-cols-1">
                    <label class=" md:text-sm text-xs text-gray-800 text-light font-semibold flex justify-start">Firstname</label>
                    <input class="py-2 px-3 rounded-lg border border-gray-400 bg-gray-50 mt-1 text-sm  focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" type="text" placeholder="Enter firstname" />
                  </div>
                  <div class="grid grid-cols-1">
                    <label class=" md:text-sm text-xs text-gray-800 text-light font-semibold flex justify-start">Lastname</label>
                    <input class="py-2 px-3 rounded-lg border border-gray-400 bg-gray-50 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" type="text" placeholder="Enter lastname" />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                  <div class="grid grid-cols-1">
                    <label class=" md:text-sm text-xs text-gray-800 text-light font-semibold flex justify-start">City</label>
                    <input class="py-2 px-3 rounded-lg border border-gray-400 bg-gray-50 mt-1  text-sm  focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" type="text" placeholder="Enter city" />
                  </div>
                  <div class="grid grid-cols-1">
                    <label class=" md:text-sm text-xs text-gray-800 text-light font-semibold flex justify-start">Municipality</label>
                    <input class="py-2 px-3 rounded-lg border border-gray-400 bg-gray-50 mt-1 text-sm  focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" type="text" placeholder="Enter municipality" />
                  </div>
                </div>

                <div class="grid grid-cols-1 mt-5 mx-7">
                  <label class=" md:text-sm text-xs text-gray-800 text-light font-semibold flex justify-start">Message</label>
                  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mt-2 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent" placeholder="Your message..."></textarea>
                </div>
                <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                  <button class='w-auto bg-[#F2506A] hover:bg-pink-600 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact