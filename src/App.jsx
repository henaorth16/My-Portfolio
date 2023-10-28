// import { BrowserRouter, Route, Routes } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/styles.css';
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
        <AwesomeSlider bullets={false} fillParent={true} animation="openAnimation">
         <div className='w-full h-[100vh]'><Home/></div>
         <div className='w-full h-[100vh] px-[10%] md:px[20%]'><About /></div>
         <div className='w-full h-[100vh]'><Portfolio /></div>   
         <div className='w-full h-[100vh]'><Testimonial /></div>
         <div className='w-full h-[100vh]'><Contact /></div>
                  
        </AwesomeSlider>
  );
}
// function App() {
//   return (
//     <BrowserRouter>
//         <AwesomeSlider bullets={false} fillParent={true} animation="openAnimation">
//       <Routes>

//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/testimonial' element={<Testimonial />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/portfolio' element={<Portfolio />} />

//       </Routes>
//         </AwesomeSlider>
//     </BrowserRouter>
//   );
// }


export default App
