
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="mt-10 px-4 sm:px-6" data-aos="fade-up">

      {/* Title */}
      <h1 className="
        flex
        mt-16 sm:mt-20
        justify-center
        items-center
        font-bold
        text-2xl sm:text-3xl
        text-[#DC143C]
      ">
        Contact
      </h1>

      {/* Contact Container */}
      <div className="
        flex
        flex-col
        mt-10 sm:mt-15
        items-center
        mb-10
      ">

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          bg-white
          shadow-lg
          shadow-gray-300
          hover:shadow-gray-400
          transition
          duration-300
          p-5
          sm:p-8
          w-full
          max-w-4xl
          font-semibold
          rounded-lg
        ">

          {/* Contact Information */}
          <div className="flex flex-col gap-5">

            <h1 className="text-xl font-bold">
              Get in Touch
            </h1>

            <p className="text-gray-700">
              Let’s connect and build something great together.
            </p>

            {/* Email */}
            <p className="flex items-start gap-3 break-all">
              <i className="bi bi-envelope-fill text-[#DC143C] mt-1"></i>

              <a
                href="mailto:pinjarisoyab2006@gmail.com"
                className="hover:text-[#DC143C] transition"
              >
                pinjarisoyab2006@gmail.com
              </a>
            </p>

            {/* Number */}
            <p className="flex items-center gap-3">
              <i className="bi bi-telephone-fill text-[#DC143C]"></i>

              <a
                href="tel:+919023195531"
                className="hover:text-[#DC143C] transition"
              >
                +91 9023195531
              </a>
            </p>

            {/* Location */}
            <p className="flex items-center gap-3">
              <i className="bi bi-geo-alt-fill text-[#DC143C]"></i>

              <a
                href="https://www.google.com/maps?q=Surat,Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#DC143C] transition"
              >
                Surat, Gujarat
              </a>
            </p>

          </div>


          {/* Contact Form */}
          <div className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
                w-full
                border-2
                rounded-lg
                p-3
                outline-none
                focus:border-[#DC143C]
                transition
              "
            />

            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="
                w-full
                border-2
                rounded-lg
                p-3
                outline-none
                focus:border-[#DC143C]
                transition
              "
            />

            <textarea
              id="message"
              name="message"
              value={formdata.message}
              onChange={handleChange}
              rows="7"
              placeholder="Your Message"
              className="
                w-full
                border-2
                rounded-lg
                p-3
                outline-none
                resize-none
                focus:border-[#DC143C]
                transition
              "
            />

            <button
              onClick={handleSubmit}
              className="
                w-full
                sm:w-fit
                cursor-pointer
                hover:-translate-y-1
                mt-3
                px-6
                py-2
                border-2
                hover:text-white
                hover:bg-[#DC143C]
                bg-black
                text-white
                rounded-lg
                transition-all
                duration-300
              "
            >
              Submit
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;

