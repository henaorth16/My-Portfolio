// import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';
import AnimatedCursor from "react-animated-cursor"
import './App.css'
import './index.css'
import Loader from './components/Loader'
import Nav from './components/Nav'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

function App() {

  const isMobileDevice = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
          <AwesomeSlider bullets={false} fillParent={true} animation="openAnimation" mobileTouch={false} className='bg-secondary-800' fill="">

            <div className='w-full h-[100vh]'><Home /></div>
            <div className='w-full h-[100vh] px-[7%] md:px[4rem]'><About /></div>
            <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto' ><Portfolio /></div>
            <div className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto'><Testimonial /></div>
            <div id='contact' className='w-full h-[100vh] px-[7%] md:px[4rem] overflow-y-auto'><Contact /></div>
          </AwesomeSlider>
        </Suspense>
      </>

    );
  }

  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>

        <div className='w-full h-[100vh] flex mobile-element'>
          <div><Home /></div>
          <div><About /></div>
          <div className=''><Portfolio /></div>
          <div className=''><Testimonial /></div>
          <div className=''><Contact /></div>
        </div>
      </Suspense>
    </>
  )
}


export default App
