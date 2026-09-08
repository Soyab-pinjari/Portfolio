import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white pt-24 sm:pt-28 pb-16">

      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Profile Image */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
        >
         <img
  src="/ProfilePic.webp"
  alt="Soyeb Pinjari"
  className="
    w-40 h-40
    sm:w-45 sm:h-45
    md:w-44 md:h-44
    lg:w-50 lg:h-50
    rounded-full
    object-cover
    border-4 border-white
    shadow-xl
  "
/>
        </div>

        {/* Text Section */}
        <div
          className="
            mt-10
            sm:mt-12
            max-w-3xl
            mx-auto
            text-left
          "
          data-aos="fade-up"
        >

          {/* Greeting */}
          <p className="
            text-gray-700
            text-base
            sm:text-lg
            mb-3
          ">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="
            font-bold
            text-2xl
            sm:text-2xl
            md:text-2xl
            lg:text-4xl
            leading-tight
            text-black
          ">
            <Typewriter
              options={{
                strings: ["Soyeb Pinjari"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h1>

          {/* Developer Title */}
          <div className="mt-4 inline-flex">
            <h2 className="
              flex
              items-center
              gap-2
              px-4
              py-2
              border-2
              border-[#DC143C]/30
              rounded-full
              text-[#DC143C]
              font-bold
              text-base
              sm:text-lg
              md:text-lg
            ">
              <i className="fa-solid fa-code"></i>
              Web Developer (MERN)
            </h2>
          </div>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-2xl
              text-gray-600
              text-sm
              sm:text-base
              md:text-base
              leading-6
              sm:leading-7
            "
          >
            Motivated and detail-oriented Full Stack Developer with a strong
            foundation in Front-end and Back-end web technologies.
            Passionate about building responsive, user-friendly web
            applications and continuously improving technical skills through
            hands-on practice.
          </p>

          {/* Resume Button */}
          <a
            href="/Final_Soyeb_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              mt-7
              px-5
              py-2.5
              bg-black
              text-white
              rounded-lg
              font-semibold
              text-sm
              border-2
              border-black
              hover:bg-[#DC143C]
              hover:border-[#DC143C]
              hover:-translate-y-1
              transition-all
              duration-300
            "
            data-aos="fade-up"
          >
            My Resume

            <i className="
              fa-solid
              fa-download
              text-[#DC143C]
              group-hover:text-white
              transition
            "></i>
          </a>

        </div>
      </div>

    </section>
  );
}

export default Home;