import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black ">  
    <nav className="bg-black fixed z-1  w-full top-0 border-b border-white-200">
      <div className="max-w-screen-xl grid grid-cols-3 items-center justify-between mx-auto p-4">
<div>
  
        <h1 className="text-[#DC143C]  text-xl font-semibold mr-20">  Portfolio</h1>
</div>
        <div>
        <ul className="flex space-x-8 font-medium">
       <Link to="/" className="text-white hover:text-[#DC143C]  transition duration-500">Home</Link>
<Link to="/Skills" className="text-white hover:text-[#DC143C] transition duration-500">Skills</Link>
<Link to="/About" className="text-white hover:text-[#DC143C] transition duration-500">About</Link>
<Link to="/Project" className="text-white hover:text-[#DC143C] transition duration-500">Projects</Link>
<Link to="/Contact" className="text-white hover:text-[#DC143C] transition duration-500">Contact</Link>
        </ul>
        </div>
          <div className="mx-10">
                <a 
  href="https://github.com/Soyab-pinjari/Projects" 
  className="mx-10" 
  target="_blank" 
  rel="noopener noreferrer"
>
  _bla 
  <i className="bi bi-github text-2xl text-white inline-block hover:-translate-y-2 transition duration-300"></i>
</a>
                    <a 
  href="https://www.linkedin.com/in/soyeb-pinjari-hellp2/?skipRedirect=true" 
  target="_blank" 
  rel="noopener noreferrer"

  className="inline-block text-white text-2xl hover:-translate-y-2 transition duration-300"
>
  <i className="bi bi-linkedin"></i>
</a>
           </div>

      </div>

    </nav>
    </div>
  );
}

export default Navbar;