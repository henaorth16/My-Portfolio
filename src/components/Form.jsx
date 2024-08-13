import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { FaUser } from 'react-icons/fa6'
import { GrMail } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("sent!")

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_w48eogg';
    const templateId = 'template_mo7jgxz';
    const publicKey = 'PEBVxHo3duK_rHXGf';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'web wizard',
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!");
        setName('')
        setEmail('')
        setMessage('')
        setSuccess(true)
      })
      .catch((error) => {
        console.log(error + "occored");
      })
  }
useEffect(()=>{
  setTimeout(()=>{
    setSuccess(false)
  },2000)
},[success])

  return (
    <>
      <form onSubmit={handleSubmit} className='w-[99%] md:w-[84%] mx-auto bg-secondary-800 rounded-xl mt-7 py-7 px-3 flex flex-col justify-center items-center gap-2'>
        <div className='relative h-[2.3rem] w-full md:w-[30rem]  bg-secondary-800'>
          <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} autoComplete='off' placeholder='Name' className='absolute contact-form top-1/2 placeholder:opacity-40 -translate-y-1/2 text-md focus:outline-none h-full z-0 w-full' required />
          <label htmlFor="name" className='absolute top-1/2 -translate-y-1/2 z-2 text-xl'><FaUser /></label>
        </div>
        <div className='relative h-[2.3rem] w-full md:w-[30rem]  bg-secondary-800'>
          <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' placeholder='Email' className='absolute contact-form top-1/2 placeholder:opacity-40 -translate-y-1/2 text-md focus:outline-none h-full z-0 w-full' required />
          <label htmlFor="email" className='absolute top-1/2 -translate-y-1/2 z-2 text-xl'><GrMail /></label>
        </div>
        <div className='relative min-h-[6.3rem] w-full md:w-[30rem]  bg-secondary-800'>
          <textarea name="" id="message" value={message} onChange={(e) => setMessage(e.target.value)} autoComplete='off' placeholder='Message' className=' focus:outline-none absolute placeholder:opacity-40 contact-form w-full resize-none min-h-[6rem]' required></textarea>
          <label htmlFor="message" className='absolute top-[4%] z-2 text-xl'><BsPencilSquare /></label>
        </div>
        <div className='md:w-[30rem] mx-auto text-right'>
        <button type="submit" className="inline-flex items-center px-4 py-1 font-medium text-secondary-200 mt-3 bg-primary-400 text-lg rounded-md hover:bg-primary-500 focus:border">Submit</button>
        </div>
        {successMessage && success && <p className='text-2xl text-[#00ff00]'>{successMessage}</p>}
      </form>
    </>

  )
}

export default Form
