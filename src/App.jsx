// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';
import AnimatedCursor from "react-animated-cursor"
import './App.css'
import './index.css'
import Loader from './components/Loader'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

function App() {

  const isMobileDevice = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  // Function to handle navigation
  const handleNavigation = () => {
    // Your navigation logic here
    console.log('Navigate to the selected section');
  };


  if (!isMobileDevice()) {
    return (
      <>
        <AnimatedCursor
          color="220,38,38"
          innerSize={8}
          outerSize={28}
          innerScale={1}
          outerScale={1.5}
          outerStyle={{ mixBlendMode: 'difference' }}
          showSystemCursor={true}
        />
        <Suspense fallback={<Loader />}>
          <AwesomeSlider bullets={false} fillParent={true} animation="openAnimation">

            <div className='w-full h-[100vh]'><Home /></div>
            <div className='w-full h-[100vh] px-[7%] md:px[4rem]'><About /></div>
            <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto' ><Portfolio /></div>
            <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto'><Testimonial /></div>
            <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto'><Contact /></div>
          </AwesomeSlider>
        </Suspense>
      </>

    );
  }

  return (
    <>
      <div className='fixed top-3 right-3 z-100 w-[2.7rem] h-[2.7rem] flex flex-col justify-around'>
        <span className='h-1 w-full bg-secondary-300'></span>
        <span className='h-1 w-full bg-secondary-300'></span>
        <span className='h-1 w-full bg-secondary-300'></span>
      </div>
      <div className='w-full h-[100vh] flex mobile-element'>
        <div><Home /></div>
        <div><About /></div>
        <div className='px-[10px]'><Portfolio /></div>
        <div className='px-[10px]'><Testimonial /></div>
        <div className='px-[10px]'><Contact /></div>
      </div>

    </>
  )
}


export default App
