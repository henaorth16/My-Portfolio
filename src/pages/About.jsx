import React, { useState, useEffect } from "react";
import "./About.css";

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
    <div className=" w-full h-full flex flex-col items-center">
      <div className=" relative  h-[3rem] md:w-1/2 w-3/4 flex mt-20">
        <h2 className="font-[verdana] text-center text-[2rem]">I'm</h2>
        {texts.map((text, index) => (
        <span
          key={index}
          className={`about-text ${index === currentIndex ? "active" : ""}`}>
          {text}
        </span>
      ))}
      </div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut tenetur, est qui impedit quo debitis alias quisquam vel obcaecati cupiditate?
      </div>
      
    </div>
  );
};

export default About;