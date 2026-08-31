import React from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function About() {
   useEffect(() => {
      AOS.init({
        duration: 2000, // animation speed
        once: true,     // ek baar hi animate ho
      });
    }, []);
  return (
    
    <div data-aos="fade-up" >
        
      <h1 className='flex mt-20 justify-center item-center font-bold text-3xl text-[#DC143C] '>About Me</h1>
<div className="flex flex-col mt-15 items-center min-h-120  px-5">

  <div className="flex flex-col gap-5 bg-[#ffff] shadow-lg shadow-gray-300 hover:shadow-gray-400 transition duration-300 p-5 max-w-3xl font-semibold text-lg">
    
<p>
  Hi, I'm Soyeb Pinjari, a passionate Web Developer focused on building
  modern, responsive, and user-friendly web applications. I enjoy creating
  clean and interactive websites that provide a smooth experience for users.
</p>

<p>
  I am currently pursuing an Integrated Master of Computer Applications (IMCA) at Bhagwan Mahavir University
   and I am currently in my 3rd year of BCA.
</p>

<p>
  Recently, I completed MERN Stack Development training from TOPS
  TECHNOLOGIES, where I gained practical experience in developing
  full-stack web applications and working with both frontend and backend
  technologies.
</p>

<p>
  I specialize in MongoDB, Express.js, React.js, and Node.js. I also have
  experience with HTML, CSS, JavaScript, Tailwind CSS, REST APIs, JWT
  authentication, and database management.
</p>

<p>
  I have developed projects such as Todo Applications, Portfolio Websites,
  and Blog Websites, which helped me improve my skills in CRUD operations,
  API integration, authentication, responsive design, and frontend-backend
  communication.
</p>

<p>
  My goal is to become a proficient Software Developer, continuously improve
  my technical and problem-solving skills, and contribute to building
  impactful and scalable digital solutions.
</p>

  </div>

</div>
    </div>
  )
}

export default About
