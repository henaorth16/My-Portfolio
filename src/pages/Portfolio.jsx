import { Img } from "react-image"
import imgGeez from "../assets/image/geez.png"
import imgTour from "../assets/image/tour.png"
import imgComp from "../assets/image/complain.png"
import imgAmazing from "../assets/image/amazing.png"
import churchFeast from "../assets/image/churchFeast.png"
import graphity from "../assets/image/graphity.jpg"
import anagnosi from "../assets/image/anagnosi.png"
import bible from "../assets/image/bible.png"
import debretabor from "../assets/image/debretabor.png"
import { MainParagraph, MainTitle } from "../components/Title"

const Lists = [
  {
    imageUrl: debretabor,
    title: "Debre-Tabor General platform",
    description: "A project built for DebreTabor medhanialem traditional theological college. It is a full-stack project built with Next.js, mongodb, and TypeScript. It is a responsive website that allows users to view the college's information, blogs, news, events, Donation using chapa payment gateway.",
    gitRepoLink: "",
    liveLink: "https://debre-tabor-portfolio.vercel.app/",
    skills: ["Nextjs", "shadcn", "mongodb", "TypeScript"],
    date: "jun-2026",
    mainColor: '140' //hue value for hsl
  },
  {
    imageUrl: graphity,
    title: "Graphity",
    description: "Math equation game. built to help students and anyone who wants to improve their math skills. It is a fun and interactive way to learn and practice math.",
    gitRepoLink: "",
    liveLink: "https://graph-ity.vercel.app/",
    skills: ["Reactjs", "vite", "Threejs", "Zustand", "TypeScript"],
    date: "may-2026",
    mainColor: '75' //hue value for hsl
  },
  {
    imageUrl: anagnosi,
    title: "Anagnosi",
    description: "Anágnosi is a lightweight, distraction-free Microsoft Word (.docx) document viewer built to run seamlessly on the web and as a browser extension.. upload docx file and read in the browser you already had.",
    gitRepoLink: "https://github.com/henaorth16/Anagnosi",
    liveLink: "https://anagnosi.vercel.app/",
    skills: ["Vite", "react", "firefox and chrome extension"],
    date: "may-2026",
    mainColor: '25' //hue value for hsl
  },
  {
    imageUrl: bible,
    title: "Bible web app",
    description: "A web application that allows users to read, plan, bookmark, and take notes of Ethiopian Bible online. since its opensource project i contributed to the project on the frontend part and also added some features to the project.",
    gitRepoLink: "https://github.com/henaorth16/EOTC-bible-web-FE",
    liveLink: "https://bible.nehemiah-osc.org/",
    skills: ["Nextjs", "shadcn", "zustand"],
    date: "sep-2025",
    mainColor: '0' //hue value for hsl
  },
  {
    imageUrl: churchFeast,
    title: "Church and Feasts",
    description: "This full-stack project is a developed to help Orthodox community. by showing the Ethiopian Orthodox Churches, celebrating feasts including integrated map.",
    gitRepoLink: "https://github.com/henaorth16/church-and-feasts",
    liveLink: "https://church-and-feasts.vercel.app",
    skills: ["NextJs", "Prisma", "TypeScript", "shadcn"],
    date: "may-2025",
    mainColor: '288' //hue value for hsl
  },

  {
    imageUrl: imgComp,
    title: "Complaint Management",
    description: "This full-stack project highlights my Next.js expertise. Feel free to explore the detailed repo—contributions are always welcome!",
    gitRepoLink: "https://github.com/henaorth16/nextjs-complaint-system/",
    liveLink: "https://nextjs-complaint-system.vercel.app/",
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
  {
    imageUrl: imgAmazing,
    title: "Amazing gear Game",
    description: "Javascript game clonning project | For pc users | It helps me to develop my programming skill",
    gitRepoLink: "https://github.com/henaorth16/Amazing-Gear",
    liveLink: "https://amazing-gear.netlify.app/",
    skills: ["javascript", "canvas"],
    date: "Dec-2023",
    mainColor: '155'
  },
]

export default function Portfolio() {
  return <>
    <div id="portfolio" className="h-[100vh] pb-24 overflow-y-auto wrapper">
      <MainTitle title="Portfolio" />
      <hr className='w-full my-4 text-secondary-500' />
      <MainParagraph text="Explore some of the projects I've worked on! each project showcases my skills and passion for creating intuitive and user-friendly experiences. Click on 'see on Github' button to learn more about the process and technologies used." />
      <div className='grid content-center md:grid-cols-2 items-center w-[fit-content] mx-auto md:px-8 md:gap-8 gap-6 lg:gap-x-24 mt-12'>

        {Lists.map((list, index) => (
          <div
            className={`md:opacity-[.88] h-full hover:opacity-100 hover:scale-[1.04] transition-transform max-w-sm w-auto mx-auto rounded-md overflow-hidden`}
            key={index + 1}
            style={{ backgroundColor: `hsl(${list.mainColor}, 80%, 20%)` }}
          >
            <div className='relative min-h-[13rem] w-full group overflow-hidden'>
              <Img className="absolute z-0 h-full w-full object-cover" src={list.imageUrl} alt={list.title} />
              <div className='absolute z-4 px-2 opacity-90 rounded-sm text-secondary-200 bottom-0 left-0'
                style={{ backgroundColor: `hsl(${list.mainColor}, 80%, 16%)` }}
              >{list.date}</div>
              <div className="absolute w-full z-10 md:bg-secondary-900 md:top-full gap-4 md:transition-[top] md:duration-[700ms] group-hover:top-0 h-full flex justify-center items-center">
                {list.liveLink === "" ? (
                  <p className='text-sm bg-secondary-800 opacity-90 text-secondary-400 py-2 px-4'>not deployed yet </p>
                ) : (
                  <a href={list.liveLink} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-800 rounded-md hover:bg-secondary-700 focus:border">Live Demo</a>
                )}
                {list.gitRepoLink ? (
                  <a href={list.gitRepoLink} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-800 rounded-md hover:bg-secondary-700 focus:border">See on Github</a>
                ) : (
                  <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-800 opacity-60 rounded-md ">Private</p>
                )
                }
              </div>
            </div>

            <div className="px-6 py-4">
              <h1 className="font-bold text-2xl text-secondary-100 mb-2">{list.title}</h1>
              <p className="text-secondary-200 ">
                {list.description}
              </p>
            </div>

            <div className="px-3 pt-4 pb-1 text-sm flex flex-wrap gap-1 items-baseline">
              {list.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="inline-block bg-secondary-100 opacity-60 rounded-full px-2 py-1 text-xs font-semibold text-secondary-800  mb-2">
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

