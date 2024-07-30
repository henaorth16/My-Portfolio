import React from 'react'
import "./About.css"
import { Fade } from "react-awesome-reveal";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
const additionals = [
  {
    icon:FaLightbulb,
    header: "lorem ipsum the",
    desc: "lorem ipsum eihd io ndhum shuwe sjaid woamn aihf kdofj "
  },
  {
    icon:MdAccessTimeFilled,
    header: "lorem ipsum the",
    desc: "lorem ipsum eihd io ndhum shuwe sjaid woamn aihf kdofj "
  },
  {
    icon:HiMiniUserGroup,
    header: "lorem ipsum the",
    desc: "lorem ipsum eihd io ndhum shuwe sjaid woamn aihf kdofj "
  },
]

function Additional() {
  return (
    <div className='bg-secondary-800 text-stone-100 py-5 px-[1.33rem] col-span-2 md:col-span-1 sm:px-10 rounded-xl'>
      <h2 className='m-2 ml-[10%] text-2xl text-primary-500 font-bold'>Additional Skills</h2>
      <hr className='w-[80%] mx-auto' />
      <div className='sm:mx-0 md:mx-5 mx-2'>

        <ol className="relative border-l border-secondary-200">
          {additionals.map((item, index) => (
              <li className="ml-[1.6rem] md:ml-[3rem] mt-[2rem] my-2" key={index}>
                <Fade>
                  <span className="absolute flex items-center  justify-center md:w-12 md:h-12 w-8 h-8 bg-secondary-800 rounded-full outline outline-secondary-300 outline-2 md:-left-6 -left-4 ">
                  {<item.icon className='text-primary-500 text-2xl font-semibold' />}
                  </span>
                  <h3 className="mb-1 text-xl font-semibold text-secondary-200">{item.title}</h3>
                  <p className="text-base font-normal text-secondary-300">{item.desc}</p>
                </Fade>
              </li>
          ))}
        </ol>

      </div>
    </div>
  );
}

export default Additional
