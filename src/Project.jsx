import React from 'react'
import AOS from "aos";
import './Projects.css'
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Project() {

  useEffect(() => {
    AOS.init({
      duration: 2000, // animation speed
      once: true,     // ek baar hi animate ho
    });
  }, []);
  const Projects = [
    {
      title: "Coffee Website",
      image: "/CoofeeImg.png",
      tech: ["HTML", "CSS", "Bootstrap"],
      code: "https://github.com/Soyab-pinjari/coffeeweb",
      preview: "https://coffeeweb-eosin.vercel.app/",
    },
    {
      title: "Portfolio Website",
      image: "/Portfolio.png",
      tech: ["Html","CSS","Tailwind","React"],
      code: "https://github.com/Soyab-pinjari/Portfolio",
      preview: "https://portfolio-indol-sigma-87.vercel.app/",
    },

    {
      title: "Todo Website",
      image: "/Todo.png",
      tech: ["React","TailwindCSS","Node", "MongoDB"],
      code: "https://github.com/Soyab-pinjari/TodoProject",
      preview: "https://todo-project-psi-five.vercel.app/",
    },
  ]

  return (
    <div className='bg-[#ffffff] mt-10 ' data-aos="fade-up">
      <h1 className='Main-title'>Project</h1>
      <div className='grid  grid-cols-3 mx-20 p-5 gap-10 min-h-120 '>
        {
          Projects.map((project, index) => (
            <div key={index} className='project-card'>
              <img src={project.image} className="border-3 rounded-xl h-50 bg-contain"
                alt={project.title} />
              <h1 className="font-bold text-2xl mx-10 mt-5 text-[#DC143C]">
                {project.title}
              </h1>
              <ul className="flex gap-3 mt-10 mx-10 flex-wrap">
                {
                  project.tech.map((item, i) => (
                    <li
                      key={i}
                      className="py-2 px-4 rounded-2xl ring-2 ring-[#DC143C] shadow-md shadow-[#DC143C] hover:shadow-lg"
                    >
                      {item}
                    </li>
                  ))
                }
              </ul>
              <div className="flex gap-5 mt-7 mb-10 mx-8">

                <a href={project.code} target="_blank">
                  <button className="project-btn">
                    Code
                  </button>
                </a>
                <a href={project.preview} target="_blank" rel="noreferrer">
                  <button className="project-btn">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Project
