import React, { useState, useEffect } from "react";
import "../components/About.css";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Additional from "../components/Additional";
import Credential from "../components/Credential";
import Me from "../components/Me";

const texts = ["Developer", "Designer", "Freelancer"];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2300);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="about" className="text-secondary-300 w-full h-full flex flex-col items-center">
      <div className=" relative w-full  h-[2.6rem] mt-14 mb-16">
        <h2 className="absolute left-[22%] sm:left-[40%] w-[100vw] md:w-[7rem] text-[2rem] font-semibold ">I'm{texts.map((text, index) => (
        <span
          key={index}
          className={`absolute right-0 font-black text-primary-500 about-text ${index === currentIndex ? "active" : ""}`}>
          {text}
        </span>
      ))}</h2>
        
      </div>

      <div className="sm:px-10 px-3 w-full wrapper overflow-auto grid md:grid-cols-2 gap-5">
        <Me />        {/* About me component*/}
        <Skills />    {/* Skills component*/}
        <Additional/> {/* Additional component*/}
        <Education /> {/* Education component*/}
        <Credential /> {/* Credentials component*/}
      </div>
      <div className="md:my-2 my-1">E-mail me on <a className="text-primary-500 hover:text-primary-400" href="mailto:emyayehenok@gmail.com">emyayehenok@gmail.com</a></div>
    </div>
  );
};

export default About;