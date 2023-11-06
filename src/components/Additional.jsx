import React from 'react'
import "./About.css"
import Fade from 'react-reveal/Fade';
import { BsClock } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
// const additional = [
//   {
//     icon:"",
//     header: "",
//     desc: ""
//   },
//   {
//     icon:"",
//     header: "",
//     desc: ""
//   },
//   {
//     icon:"",
//     header: "",
//     desc: ""
//   },
//   {
//     icon:"",
//     header: "",
//     desc: ""
//   },
//   {
//     icon:"",
//     header: "",
//     desc: ""
//   },
// ]

function Additional() {
  return (
    <div className='bg-[#232222] text-stone-100 py-5 px-7 col-span-2 md:col-span-1 sm:px-10 rounded-xl'>
        <h2 className='m-2 ml-[10%] text-2xl text-red-500 font-bold'>Additional Skills</h2>
        <hr className='w-[80%] mx-auto' />
        <div className='sm:mx-0 mx-5'>
          
<ol className="relative border-l border-gray-200">

    <li className="ml-[2.4rem] md:ml[3rem] mt-8 my-2">
      <Fade bottom>
        <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-[#232323] rounded-full outline outline-gray-300 outline-2 md:-left-6 -left-4 ">
        <BsClock className='text-red-500 md:text-2xl font-semibold'/>
        </span>
        <h3 className="mb-1 text-xl font-semibold text-white">Flowbite Library v1.2.2</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2003 - 2005</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </Fade>
    </li>



    <li className="ml-[2.4rem] md:ml[3rem] mt-8 my-2">
      <Fade bottom>
        <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-[#232323] rounded-full outline outline-gray-300 outline-2 md:-left-6 -left-4 ">
        <GrGroup className='text-white md:text-2xl font-semibold'/>
        </span>
        <h3 className="mb-1 text-xl font-semibold text-white">Flowbite Library v1.2.2</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2003 - 2005</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </Fade>
    </li>


    <li className="ml-[2.4rem] md:ml[3rem] mt-8 my-2">
      <Fade bottom>
        <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-[#232323] rounded-full outline outline-gray-300 outline-2 md:-left-6 -left-4 ">
        <BsClock className='text-red-500 md:text-2xl font-semibold'/>
        </span>
        <h3 className="mb-1 text-xl font-semibold text-white">Flowbite Library v1.2.2</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2003 - 2005</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </Fade>
    </li>
</ol>

        </div>
    </div>
  )
}

export default Additional