
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="mt-10 sm:mt-24 md:mt-30 px-4 sm:px-6" data-aos="fade-up">

      {/* Title */}
      <h1 className="font-bold text-2xl sm:text-3xl lg:mb-20  sm:mb-14  flex justify-center items-center text-[#DC143C]">
        Skills
      </h1>

      {/* Skills Container */}
      <div className="
        flex
        justify-center
        gap-6
        sm:gap-8
        lg:gap-10
        flex-wrap
        mb-10
        max-w-6xl
        mx-auto
      ">

        {/* Frontend */}
        <div className="
          w-full
          sm:w-[320px]
          p-5
          rounded-2xl
          ring-2
          ring-[#DC143C]
          transform
          hover:-translate-y-4
          hover:shadow-lg
          hover:shadow-[#DC143C]
          transition
          duration-500
        ">
          <h1 className="font-bold text-xl sm:text-2xl flex items-center gap-2 mb-4">
            Frontend Development
            <i className="fa-solid fa-code text-[#DC143C]"></i>
          </h1>

          <ul className="space-y-3">

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>HTML5</span>
              <i className="fa-brands fa-html5 text-orange-500 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>CSS3</span>
              <i className="fa-brands fa-css3-alt text-blue-500 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>JavaScript</span>
              <i className="fa-brands fa-js text-yellow-400 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>ReactJS</span>
              <i className="fa-brands fa-react text-cyan-400 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>Tailwind CSS</span>
              <i className="fa-solid fa-wind text-cyan-500 text-xl"></i>
            </li>

          </ul>
        </div>


        {/* Backend */}
        <div className="
          w-full
          sm:w-[320px]
          p-5
          rounded-2xl
          ring-2
          ring-[#2563eb]
          transform
          hover:-translate-y-4
          hover:shadow-lg
          hover:shadow-[#2563eb]
          transition
          duration-500
        ">
          <h1 className="font-bold text-xl sm:text-2xl flex items-center gap-2 mb-4">
            Backend Development
            <i className="fa-solid fa-server text-[#2563eb]"></i>
          </h1>

          <ul className="space-y-3">

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>Node.js</span>
              <i className="fa-brands fa-node-js text-green-600 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>Express.js</span>
              <i className="fa-solid fa-bolt text-gray-700 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>MongoDB</span>
              <i className="fa-solid fa-database text-green-500 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>Mongoose</span>
              <i className="fa-solid fa-database text-green-500 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>REST APIs</span>
              <i className="fa-solid fa-network-wired text-blue-500 text-xl"></i>
            </li>

          </ul>
        </div>


        {/* Tools */}
        <div className="
          w-full
          sm:w-[320px]
          p-5
          rounded-2xl
          ring-2
          ring-purple-500
          transform
          hover:-translate-y-4
          hover:shadow-lg
          hover:shadow-purple-500
          transition
          duration-500
        ">
          <h1 className="font-bold text-xl sm:text-2xl flex items-center gap-2 mb-4">
            Tools & Platforms
            <i className="fa-solid fa-layer-group text-[#2563eb]"></i>
          </h1>

          <ul className="space-y-3">

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>VS Code</span>
              <i className="fa-solid fa-code text-blue-600 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>Git & GitHub</span>
              <i className="fa-brands fa-github text-gray-800 text-xl"></i>
            </li>

            <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
              <span>Postman</span>
              <i className="fa-solid fa-paper-plane text-orange-500 text-xl"></i>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
}

export default Skills;

