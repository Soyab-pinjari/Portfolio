import React from 'react'
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation speed
      once: true,     // ek baar hi animate ho
    });
  }, []);
  return (
    < >

    
      <div className='grid grid-cols-2 mt-5 pt-40 mx-20 font-semibold items-center  '>
        <div>
          <h1 className="font-bold text-3xl">
  <Typewriter
    options={{
      strings: ["Hi, I’m Soyeb Pinjari"],
      autoStart: true,
      loop: true,
      delay: 75,
    }}
    
  />
</h1>

          <h2 className='font-bold text-2xl mt-2 text-[#DC143C]'>
            Web Developer
          </h2>

          <div className='w-[480px] mt-8'>
            <p  data-aos="fade-up" >
              Motivated and detail-oriented Web Developer with a strong foundation in front-end web technologies.
              Passionate about building responsive, user-friendly web applications and continuously
              improving technical skills through hands-on practice.
            </p>

    <a 
  href="/SoyebResume.pdf" 
  target="_blank"
  data-aos="fade-up"
  className=" transform hover:-translate-y-4   inline-block mt-10 p-2 border-2 hover:text-white hover:bg-[#DC143C] bg-black text-white rounded-lg"
>
  My Resume
</a>
          </div>
        </div> 
        <div className='flex justify-center' data-aos="zoom-in" >
          <img src="/ProfilePic.webp" alt="profile" className='w-100 h-100 rounded-full object-cover'/>
        </div>

      </div>
    </>
  )
}

export default Home