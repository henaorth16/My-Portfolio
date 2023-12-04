// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, {lazy, Suspense } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';
import AnimatedCursor from "react-animated-cursor"
import './App.css'
import './index.css'
import Loader from './components/Loader'

const Home = lazy(() =>  import('./pages/Home'));
const About = lazy(() =>  import('./pages/About'));
const Testimonial = lazy(() =>  import('./pages/Testimonial'));
const Contact = lazy(() =>  import('./pages/Contact'));
const Portfolio = lazy(() =>  import('./pages/Portfolio'));

function App() {
  return (
    <>
    <AnimatedCursor
  color="220,38,38"
  innerSize={8}
  outerSize={28}
  innerScale={1}
  outerScale={1.5}
  outerStyle={{mixBlendMode: 'color'}}
  showSystemCursor={true}
/>
         <Suspense fallback={<Loader />}>
    <AwesomeSlider bullets={false} fillParent={true} animation="openAnimation">
         
          <div className='w-full h-[100vh]'><Home/></div>
         <div className='w-full h-[100vh] px-[7%] md:px[4rem]'><About /></div>
         <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto' ><Portfolio /></div>   
         <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto'><Testimonial /></div>
         <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto'><Contact /></div>
        </AwesomeSlider>
          </Suspense>
    </>
        
  );
}


export default App
