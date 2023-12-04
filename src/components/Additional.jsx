import React from 'react'
import "./About.css"
import { Fade } from "react-awesome-reveal";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
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
    <div className='bg-secondary-800 text-stone-100 py-5 px-7 col-span-2 md:col-span-1 sm:px-10 rounded-xl'>
        <h2 className='m-2 ml-[10%] text-2xl text-primary-500 font-bold'>Additional Skills</h2>
        <hr className='w-[80%] mx-auto' />
        <div className='sm:mx-0 mx-5'>
          
<ol className="relative border-l border-secondary-200">

    <li className="ml-[2.4rem] md:ml[3rem] mt-8 my-2">
      <Fade>
        <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-secondary-800 rounded-full outline outline-secondary-300 outline-2 md:-left-6 -left-4 ">
        <MdAccessTimeFilled className='text-primary-500 text-2xl font-semibold'/>
        </span>
        <h3 className="mb-1 text-xl font-semibold text-secondary-200">Lorem, ipsum dolor.</h3>
        <p className="text-base font-normal text-secondary-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, maxime?</p>
      </Fade>
    </li>



    <li className="ml-[2.4rem] md:ml[3rem] mt-8 my-2">
      <Fade bottom>
        <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-secondary-800 rounded-full outline outline-secondary-300 outline-2 md:-left-6 -left-4 ">
        <HiMiniUserGroup className='text-primary-500 text-2xl font-semibold'/>
        </span>
        <h3 className="mb-1 text-xl font-semibold text-secondary-200">kdnn  dn dd </h3>
        <p className="text-base font-normal text-secondary-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus voluptas at reprehenderit vel officiis sint quod ut asperiores ad.</p>
        </Fade>
     </li>

    <li className="ml-[2.4rem] md:ml[3rem] mt-8 my-2">
      <Fade bottom>
        <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-secondary-800 rounded-full outline outline-secondary-300 outline-2 md:-left-6 -left-4 ">
        <FaLightbulb className='text-primary-500 text-2xl font-semibold'/>
        </span>
        <h3 className="mb-1 text-xl font-semibold text-secondary-200"> Lorem, ipsum dolor.</h3>
        <p className="text-base font-normal text-secondary-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus voluptas at reprehenderit vel officiis sint quod ut asperiores ad.</p>
      </Fade>
    </li>
</ol>

        </div>
    </div>
  )
}

export default Additional
