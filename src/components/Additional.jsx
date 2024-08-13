import React from 'react'
import "./About.css"
import { Fade } from "react-awesome-reveal";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import Title from './Title';
const additionals = [
  {
    icon:MdAccessTimeFilled,
    header: "Time management",
    desc: "I believe Finishing the work on time"
  },
  {
    icon:FaLightbulb,
    header: "Problem solving",
    desc: "the skill to solve the problems is invaluable throughout all staffs."
  },
  {
    icon:HiMiniUserGroup,
    header: "Collaboration skill",
    desc: "working with other is essential, and helps to finish the work effectively."
  },
]

function Additional() {
  return (
    <div className='bg-secondary-800 text-stone-100 py-5 px-[1.33rem] col-span-2 md:col-span-1 sm:px-10 rounded-xl'>
      < Title title="Additional Skills"/>
      <div className='sm:mx-0 md:mx-5 mx-2'>

        <ol className="relative border-l border-secondary-200">
          {additionals.map((item, index) => (
              <li className="ml-[1.6rem] md:ml-[3rem] mt-[1.5rem] my-2" key={index}>
                <Fade>
                  <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-secondary-800 rounded-full outline outline-secondary-300 outline-2 md:-left-6 -left-4 ">
                  {<item.icon className='text-primary-500 text-2xl font-semibold' />}
                  </span>
                  <h3 className="mb-[0.18rem] text-[1.15rem] font-semibold text-secondary-200">{item.header}</h3>
                  <p className="text-[0.94rem] font-normal text-secondary-300">{item.desc}</p>
                </Fade>
              </li>
          ))}
        </ol>

      </div>
    </div>
  );
}

export default Additional
