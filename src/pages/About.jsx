import React, { useState, useEffect } from "react";
import "./About.css";
import image from '../assets/image/img.jpg'
import Skills from "../components/Skills";

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
    <div className="text-stone-100 w-full h-full flex flex-col items-center">
      <div className=" relative  h-[3rem]  flex justify-center mt-20">
        <h2 className=" font-[verdana] text-center sm:left-[50%] left-[-40%] translate-x-[-3rem] w-[100vw] md:w-[7rem] text-[2rem]">I'm</h2>
        {texts.map((text, index) => (
        <span
          key={index}
          className={`absolute about-text ${index === currentIndex ? "active" : ""}`}>
          {text}
        </span>
      ))}
      </div>
      <div className="sm:px-10 px-3 w-full wrapper overflow-auto grid grid-cols-2 gap-5">
        <Skills />
        <div className="bg-[#232323]">education</div>
        <div className="bg-green-400">additional</div>
        <div className="bg-green-400">other</div>
        <div className="h-[19rem] bg-green-400">other</div>
      </div>
    </div>
  );
};

export default About;