
import React from "react";
import AOS from "aos";
import "./Projects.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const Projects = [
    {
      title: "Blog Website",
      image: "/Screenshot 2026-08-31 091753.png",
      tech: ["ReactJS", "Tailwind CSS", "NodeJS", "ExpressJS", "MongoDB"],
      code: "https://github.com/Soyab-pinjari/Blog-web",
      preview: "https://blog-web-eta-nine.vercel.app/",
    },
    {
      title: "Portfolio Website",
      image: "/updated-pImage.png",
      tech: ["Html", "CSS", "Tailwind", "React"],
      code: "https://github.com/Soyab-pinjari/Portfolio",
      preview: "https://portfolio-eight-coral-34.vercel.app/",
    },
    {
      title: "Todo Website",
      image: "/Todo.png",
      tech: ["React", "TailwindCSS", "Node", "MongoDB"],
      code: "https://github.com/Soyab-pinjari/TodoProject",
      preview: "https://todo-project-psi-five.vercel.app/",
    },
  ];

  return (
    <div className="bg-[#ffffff] mt-20 px-4 sm:px-6 md:px-10">
      <h1 className="Main-title " data-aos="fade-up">
        Projects
      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          lg:mt-7
          lg:gap-10
          max-w-7xl
          mx-auto
          p-2 sm:p-5
        "
      >
        {Projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="fade-up"
          >
            <img
              src={project.image}
              className="project-image"
              alt={project.title}
            />

            <h1 className="project-title">
              {project.title}
            </h1>

            <ul className="tech-list">
              {project.tech.map((item, i) => (
                <li
                  key={i}
                  className="tech-item"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="project-actions">
              <a href={project.code} target="_blank" rel="noreferrer">
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
        ))}
      </div>
    </div>
  );
}

export default Project;

