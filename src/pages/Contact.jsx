import React from 'react'
import Form from '../components/Form'

function Contact() {
  return (
    <>
    <div id='contact' className='h-[100vh] wrapper overflow-y-auto px-3'>
      <h1 className='text-primary-500 text-3xl text-center font-semibold mt-20'>Contact</h1>
      <hr className='w-full my-4 text-secondary-500' />
      <h2 className='text-center text-lg text-secondary-200'>Say hi on E-mail: <a href="mailto:emyayehenok@gmail.com" className='text-primary-500 pl-2'>emyayehenok@gmail.com</a></h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quas voluptatum tempora perferendis facilis molestiae excepturi beatae nemo, unde repudiandae soluta, voluptatem ab rem dignissimos. Facere cupiditate dolorem aspernatur? Autem.</p>
      <Form />
      <div className='w-full mt-8 flex justify-center md:gap-10 gap-4'>
        <a className='bg-[#166383] md:px-4 md:py-2 px-3 py-1 hover:opacity-80 text-secondary-100' href="https://www.linkedin.com/in/henok-emyaye-92b199252">Linkedin</a>
        <a className='bg-[#08b2f2] md:px-4 md:py-2 px-3 py-1 hover:opacity-80 text-secondary-100' href="https://www.t.me/Henaorth">Telegram</a>
        <a className='bg-[#252525] md:px-4 md:py-2 px-3 py-1 hover:opacity-80 text-secondary-100' href="https://github.com/henaorth16">Github</a>
      </div>
    </div>
      
    </>
  )
}

export default Contact
