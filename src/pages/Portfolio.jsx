import { Img } from "react-image"
import imgGeez from "../assets/image/geez.png"
import imgTour from "../assets/image/tour.png"
import imgComp from "../assets/image/complain.png"
import { MainParagraph } from "../components/Title"

const Lists = [
  {
    imageUrl: imgGeez,
    title: "Ge'ez number converter",
    description: "most developer uses vanilla javaScript to show their programming skill because, not using library or any framework is like a challenge for them!",
    gitRepoLink: "https://github.com/henaorth16/Ge-ez-Number-Converter",
    liveLink: "https://geezconverter.netlify.app",
    skills: ["Html", "CSS", "javaScript"],
    date: "sep-2023",
    mainColor: '3' //hue value for hsl
  },
  {
    imageUrl: imgComp,
    title: "Complaint Management",
    description: "This full-stack project highlights my Next.js expertise. Feel free to explore the detailed repo—contributions are always welcome!",
    gitRepoLink: "https://github.com/henaorth16/nextjs-complaint-system/",
    liveLink: "https://nextjs-complaint-system-lf78kybrl-henoks-projects-67003898.vercel.app/",
    skills: ["NextJs", "Prisma", "TypeScript", "shadcn"],
    date: "jun-2024",
    mainColor: '49'
  },
  {
    imageUrl: imgTour,
    title: "Tour and Travel Frontend",
    description: "my first work for the clients",
    gitRepoLink: "https://github.com/henaorth16/delight",
    liveLink: "https://delighttourandtravel.com/",
    skills: ["React", "Tailwind", "javaScript"],
    date: "jul-2023",
    mainColor: '165'
  },
]

export default function Portfolio() {
  return <>
  <div id="portfolio" className="h-[100vh] pb-24 overflow-y-auto wrapper">
    <h1 className='text-primary-500 text-3xl text-center font-extrabold mt-20'>Projects</h1>
    <hr className='w-full my-4 text-secondary-500' />
    <MainParagraph text="Explore some of the projects I've worked on! mostly from frontend development and some full-stack applications, each project showcases my skills and passion for creating intuitive and user-friendly experiences. Click on 'see on Github' button to learn more about the process and technologies used."/>
    <div className='grid content-center md:grid-cols-2 items-center w-[fit-content] mx-auto md:px-8 md:gap-8 gap-6 lg:gap-x-24 mt-12'>

      {Lists.map((list, index) => (
        <div
          className={`md:opacity-[.88] h-full hover:opacity-100 max-w-sm w-auto mx-auto rounded-md overflow-hidden`}
          key={index + 1}
          style={{ backgroundColor:`hsl(${list.mainColor}, 80%, 30%)`}}
        >
          <div className='relative min-h-[13rem] w-full group overflow-hidden'>
            <Img className="absolute z-0 h-full w-full object-cover" src={list.imageUrl} alt={list.title} />
            <div className='absolute z-4 px-2 opacity-90 rounded-sm text-secondary-200 bottom-0 left-0'
              style={{ backgroundColor:`hsl(${list.mainColor}, 80%, 16%)`}}
            >{list.date}</div>
            <div className="absolute w-full z-10 md:bg-secondary-900 md:top-full gap-4 md:transition-[top] md:duration-[700ms] group-hover:top-0 h-full flex justify-center items-center">
              {list.liveLink === "" ? (
                <p className='text-sm bg-secondary-800 opacity-90 text-secondary-400 py-2 px-4'>not deployed yet </p>
              ) : (
                <a href={list.liveLink} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-800 rounded-md hover:bg-secondary-700 focus:border">Live Demo</a>
              )}
              <a href={list.gitRepoLink} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-800 rounded-md hover:bg-secondary-700 focus:border">See on Github</a>
            </div>
          </div>

          <div className="px-6 py-4">
            <h1 className="font-bold text-2xl text-secondary-100 mb-2">{list.title}</h1>
            <p className="text-secondary-200 ">
              {list.description}
            </p>
          </div>

          <div className="px-6 pt-4 pb-2 text-sm flex">
            {list.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="inline-block bg-secondary-100 opacity-60 rounded-full px-3 py-1 text-xs font-semibold text-secondary-800 mr-2 mb-2">
                {`#${skill}`}
              </span>
            ))}
          </div>

        </div>
      ))}



    </div>
  </div>
    

  </>

}

