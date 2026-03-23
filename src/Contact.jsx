import React from 'react'

function Contact() {
  return (
    <div className='mt-10'>
              
      <h1 className='flex mt-20 justify-center item-center font-bold text-3xl text-[#DC143C] '>Contact </h1>
<div className="flex flex-col mt-15 items-center mb-10 max-h-screen  px-5">

  <div className="grid grid-cols-2 gap-5 bg-[#ffff] shadow-lg shadow-gray-300 hover:shadow-gray-400 transition duration-300 p-5 min-w-280 min-h-100 font-semibold ">
        <div className='flex flex-col gap-5'>

        <h1 className='text-lg'>Get in Touch</h1>
        <p>Let’s connect and build something great together.</p>
            {/* email */}
            <p className='flex gap-3' >
            <i class="bi bi-envelope-fill text-[#DC143C]"></i>
             <a href="mailto:pinjarisoyab2006@gmail.com">pinjarisoyab2006@gmail.com</a>
            </p>
            {/* Number */}
            <p className='flex gap-3'>
                 <i class="bi bi-telephone-fill text-[#DC143C]"></i>
                <a href="tel:+919023195531">+91 9023195531</a>
            </p>
            {/* Location */}
         <p className='flex gap-3'>
            <i className="bi bi-geo-alt-fill text-[#DC143C]"></i>
            <a 
            href="https://www.google.com/maps?q=Surat,Gujarat" 
            target="_blank" 
            rel="noopener noreferrer"
                 >
                 Surat, Gujarat
                </a>
            </p>
            </div>

            {/* Contact Details */}
            <div className='flex flex-col gap-3 mb-10'>
               

                <input type="text" id="name" placeholder='Your Name' className='border-2 rounded-lg  p-2 '  />
                <input type="email" id="email" placeholder='Your Email' className='border-2 rounded-lg  p-2'  />
                <textarea id="message" rows="7" cols="50" placeholder='Your Message' className='border-2 rounded-lg   '  />
                <button className='w-30 cursor-pointer transform hover:-translate-y-4  inline-block mt-10 p-2 border-2 hover:text-white hover:bg-[#DC143C] bg-black text-white rounded-lg'>Submit</button>
            </div>
     </div>
    </div>
    </div>
  )
}

export default Contact
