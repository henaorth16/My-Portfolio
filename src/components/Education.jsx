import React from 'react'
import { Fade } from "react-awesome-reveal";
import Title from './Title';

function Education() {
  return (
    <div className='bg-secondary-800 text-secondary-250 py-5 px-7 col-span-2 md:col-span-1 md:px-10 rounded-xl'>
        <Title title="Education"/>
        <div >

        </div>
          <Fade delay={300}>

        <p className='text-justify'>As i told you above here i am a  <strong>self taught</strong>,  During my high school years at "Andarge" private school until 2021, I delved into web development through online resources, particularly YouTube and various websites. Despite lacking a formal degree, my passion for frontend development led me to acquire comprehensive skills and knowledge. Currently i finished with TVET in Microlink IT College.</p>
          </Fade>
    </div>
  )
}

export default Education
