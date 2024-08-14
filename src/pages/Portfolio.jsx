import { Img } from "react-image"
import Image from "../assets/image/geez.png"

const Lists = [
  {
    imageUrl: Image,
    title: "Ge'ez number converter",
    description: "most developer uses vanilla javaScript to show their programming skill because, not using library or any framework is like a challenge for them!",
    gitRepoLink: "https://github.com/henaorth16/Ge-ez-Number-Converter",
    liveLink: "https://geezconverter.netlify.app",
    skills: ["Html", "CSS", "javaScript"],
    date: "sep-2023",
    mainColor: 'dc2626'
  },
]

export default function Portfolio() {
  return <>
  <div id="portfolio" className="h-[100vh] pb-24 overflow-y-auto wrapper">
    <h1 className='text-primary-500 text-3xl text-center font-extrabold mt-20'>Projects</h1>
    <hr className='w-full my-4 text-secondary-500' />

    <div className='md:grid md:content-center md:grid-cols-2 items-center w-full md:px-8 px-3 md:gap-x-3'>

      {Lists.map((list, index) => (
        <div
          className={`opacity-80 hover:opacity-100 mb-6 max-w-sm w-auto mx-auto rounded-md overflow-hidden shadow-lg`}
          key={index + 1}
          style={{ backgroundColor: `#${list.mainColor}` }}
        >
          <div className='relative min-h-[13rem] w-full group overflow-hidden'>
            <Img className="absolute z-0 h-full w-full object-cover" src={list.imageUrl} alt={list.title} />
            <div className='absolute z-4 text-secondary-300 bottom-3 right-2'>{list.date}</div>
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
            <p className="text-secondary-200 text-base">
              {list.description}
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            {list.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="inline-block bg-secondary-100 opacity-60 rounded-full px-3 py-1 text-sm font-semibold text-secondary-800 mr-2 mb-2">
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

