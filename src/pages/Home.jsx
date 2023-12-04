import React from "react"
import image from '../assets/image/image.jpg'
import Fade from 'react-reveal/Fade';
// import {Link} from 'react-router-dom'

function Home() {
    return <>
            <div className="text-secondary-200 text-center h-full w-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center md:w-1/2 w-3/4 gap-3 font-par">
                    <Fade>
                        <div className="w-[10rem] h-[10rem] mb-6">
                            <img className="w-[460px] h-[100%] object-fill rounded-full" src={image} alt="hero image" />
                        </div>
                    </Fade>
                    <Fade>
                    <h2 className="text-xl font-bold tracking-wider">Hello There, Here is <Fade top><span className="text-primary-500 text-[1.4rem] font-heading font-black">HENOK EMYAYE</span></Fade>  </h2>
                    </Fade>
                    <p className="font-par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente earum eligendi sit tempora, id mollitia animi expedita aliquid tempore eos nemo maxime culpa et voluptate assumenda fuga fugiat!</p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-secondary-200 bg-secondary-900 rounded-md hover:bg-opacity-70  focus:z-10 focus:ring-1 focus:outline-none">
                        <svg className="w-5 h-5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#dc2626" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                        </svg> Download Resume
                    </a>
                </div>

            </div>

        </>
}

export default Home
