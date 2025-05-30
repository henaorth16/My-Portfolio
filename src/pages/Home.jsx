import React from "react"
import image from '../assets/image/image.jpg'
import Resume from '../assets/pdf/HenokEmyayeResume.pdf'
import { Fade } from "react-awesome-reveal";
import { Img } from "react-image";

function Home() {
    return <>
        <div id="home" className="text-secondary-200 text-center h-full w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:w-[60%] w-3/4 gap-3 font-par">
                <Fade>
                    <div className="w-[10rem] h-[10rem] mb-6">
                        <Img className="w-[460px] h-[100%] object-fill rounded-full" src={image} alt="hero image" />
                    </div>
                </Fade>
                <Fade>
                    <h2 className="text-xl font-bold tracking-wider text-secondary-500">👋Hello, Here is <Fade><span className="text-primary-500 text-[1.4rem] font-heading font-bold">HENOK EMYAYE</span></Fade>  </h2>
                </Fade>
                    <p>Frontend, Problem Solving, Collaboration with other, JavaScript, Reactjs, Nextjs, TypeScript</p>
                <div className="text-secondary-400 text-sm md:text-base flex gap-3">
                    <a href={Resume} target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-950 rounded-md hover:bg-opacity-50  focus:z-10 focus:ring-1 focus:outline-none">
                        <svg className="w-5 h-5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#dc2626" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Open Resume
                    </a>
                    <a href="https://github.com/henaorth16" target="_blank" className="peer inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-950 rounded-md hover:bg-opacity-50  focus:z-10 focus:ring-1 focus:outline-none">
                        <svg className="w-5 h-5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#dc2626" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        Github
                    </a>
                    <img
                        className="absolute top-1/3 right-2/5 hidden peer-hover:block"
                        src="https://github-readme-stats.vercel.app/api?username=henaorth16&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide=prs"
                        alt="GitHub Stats"
                    />
                </div>
            </div>
        </div>
    </>
}

export default Home
