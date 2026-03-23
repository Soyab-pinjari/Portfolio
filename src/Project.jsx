import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Project() {
   useEffect(() => {
      AOS.init({
        duration: 2000, // animation speed
        once: true,     // ek baar hi animate ho
      });
    }, []);
  return (
    <div className='bg-[#ffffff] mt-10 'data-aos="fade-up">
      <h1 className='flex  mt-20 justify-center item-center  font-bold text-3xl text-[#DC143C]'>Project</h1>
      <div className='grid  grid-cols-3 mx-20 p-5 gap-10 min-h-120 '>

        {/* Coofe web */}
        <div className='flex p-3  flex-col bg-white mt-10 min-h-10 shadow-[0_0_15px_rgba(0,0,0,0.1)]  shadow-gray-300 hover:shadow-gray-400 transform hover:-translate-y-4 transition duration-300  rounded-2xl '>
            
            <img src="/public/CoofeeImg.png" className='border-3   rounded-xl h-50 bg-contain  ' alt=""  />
            
            <h1 className='font-bold text-2xl  mx-10 mt-5 text-[#DC143C]'>Coffee website</h1>

           <ul className='flex gap-3 mt-10 mx-10'>
            <li className=' py-2 px-3 rounded-2xl  ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>HTML</li>
            <li className=' py-2 px-3 rounded-2xl ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>CSS</li>
            <li className=' py-2 px-3 rounded-2xl ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>Bootstrap</li>

           </ul>
           <div className='flex gap-5 mt-7 mb-10 mx-8'>
            <a href="https://github.com/Soyab-pinjari/Projects/tree/main/coffeweb ">

           <button className='border-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-[#DC143C]  text-lg cursor-pointer font-semibold'>Code</button>
            </a>
            <a href="https://coffeeweb-eosin.vercel.app/">

           <button className='border-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-[#DC143C]  text-lg cursor-pointer font-semibold'>Preview</button>
            </a>
           </div>
        </div>

          {/* Portfolio web */}

           <div className='flex  flex-col p-3 bg-white shadow-xl mt-10 shadow-gray-300 hover:shadow-gray-400 transform hover:-translate-y-4 transition duration-300  rounded-2xl '>
            
            <img src="/public/Portfolio.png" className='border-3   rounded-xl h-50 bg-contain ' alt=""  />
            
            <h1 className='font-bold text-2xl mx-10 mt-5 text-[#DC143C]'>Portfolio Website</h1>

           <ul className='flex gap-3 mt-10 mx-10'>
            <li className=' py-2 px-3 rounded-2xl  ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>HTML</li>
            <li className=' py-2 px-3 rounded-2xl ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>CSS</li>
            <li className=' py-2 px-3 rounded-2xl ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>Bootstrap</li>

           </ul>
           <div className='flex gap-5 mt-7 mb-10 mx-8'>
            <a href="https://github.com/Soyab-pinjari/Portfolio">

           <button className='border-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-[#DC143C]  text-lg cursor-pointer font-semibold'>Code</button>
            </a>
           <button className='border-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-[#DC143C]  text-lg cursor-pointer font-semibold'>Preview</button>
           </div>
        </div>

              {/* Elife web */}
           <div className='flex p-3 flex-col bg-white shadow-xl mt-10 shadow-gray-300 hover:shadow-gray-400 transform hover:-translate-y-4 transition duration-300  rounded-2xl '>
            
            <img src="/public/Elife.png" className=' border-3  rounded-xl h-50 bg-contain ' alt=""  />
            
            <h1 className='font-bold text-2xl mx-10 mt-5 text-[#DC143C]'>E-commerse Website</h1>

           <ul className='flex gap-3 mt-10 mx-10'>
            <li className=' py-2 px-3 rounded-2xl  ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>HTML</li>
            <li className=' py-2 px-3 rounded-2xl ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>CSS</li>
            <li className=' py-2 px-3 rounded-2xl ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg '>Bootstrap</li>

           </ul>
           <div className='flex gap-5 mt-7 mb-10 mx-8'>
           <button className='border-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-[#DC143C]  text-lg cursor-pointer font-semibold'>Code</button>
           <button className='border-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-[#DC143C]  text-lg cursor-pointer font-semibold'>Preview</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Project
