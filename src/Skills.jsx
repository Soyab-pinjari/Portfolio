import React from 'react'

function Skills() {
  return (
    <div className='mt-30'>
      <h1 className='mb-20 font-bold text-3xl mb-10 flex justify-center item-center text-[#DC143C]'>Skills</h1>
    <div className='flex justify-center gap-10 mt-10 flex-wrap mb-10  '>
     

     <div className="w-[320px]  p-5 rounded-2xl ring-2 ring-[#DC143C] transform hover:-translate-y-4 hover:shadow-lg hover:shadow-[#DC143C]  transition duration-500">

  <h1 className="font-bold text-2xl flex items-center gap-2 mb-4">
    Frontend Development
    <i className="fa-solid fa-code text-[#DC143C]"></i>
  </h1>

  <ul className="space-y-3">

    <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
      <span>HTML</span>
      <i className="fa-brands fa-html5 text-orange-500 text-xl"></i>
    </li>

    <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
      <span>CSS</span>
      <i className="fa-brands fa-css3-alt text-blue-500 text-xl"></i>
    </li>

    <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
      <span>JavaScript</span>
      <i className="fa-brands fa-js text-yellow-400 text-xl"></i>
    </li>

    <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
      <span>React</span>
      <i className="fa-brands fa-react text-cyan-400 text-xl"></i>
    </li>

  </ul>

</div>
    

          <div className="w-[320px] p-5 rounded-2xl ring-2 ring-[#2563eb] transform hover:-translate-y-4 hover:shadow-lg hover:shadow-[#2563eb]  transition duration-500">

  <h1 className="font-bold text-2xl flex items-center gap-2 mb-4">
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
      <span>REST API</span>
      <i className="fa-solid fa-network-wired text-blue-500 text-xl"></i>
    </li>

  </ul>

</div>

<div className="w-[320px] p-5 rounded-2xl ring-2 ring-purple-500 transform hover:-translate-y-4 hover:shadow-lg hover:shadow-purple-500 transition duration-500">

  <h1 className="font-bold text-2xl flex items-center gap-2 mb-4">
    Frameworks
    <i className="fa-solid fa-layer-group text-[#2563eb]"></i>
  </h1>

  <ul className="space-y-3">

    <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
      <span>Bootstrap</span>
      <i className="fa-brands fa-bootstrap text-purple-600 text-xl"></i>
    </li>

    <li className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
      <span>Tailwind CSS</span>
      <i className="fa-solid fa-wind text-cyan-500 text-xl"></i>
    </li>

  </ul>

</div>

    </div>
    </div>
  )
}

export default Skills
