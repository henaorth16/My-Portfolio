// import { BrowserRouter, Route, Routes } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';
import AnimatedCursor from "react-animated-cursor"
// import { useState } from 'react'
import './App.css'

import Home from "./pages/Home";
import About from "./pages/About";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import './index.css'

function App() {
  return (
    <>
    <AnimatedCursor
  color="205,80,0"
  innerSize={8}
  outerSize={28}
  innerScale={1}
  outerScale={1.5}
  showSystemCursor={true}
/>
    <AwesomeSlider bullets={false} fillParent={true} animation="openAnimation">
         
         <div className='w-full h-[100vh]'><Home/></div>
         <div className='w-full h-[100vh] px-[7%] md:px[4rem]'><About /></div>
         <div className='w-full h-[100vh]'><Portfolio /></div>   
         <div className='w-full h-[100vh]'><Testimonial /></div>
         <div className='w-full h-[100vh]'><Contact /></div>
        </AwesomeSlider>
    </>
        
  );
}



export default App
