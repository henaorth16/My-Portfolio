import React from 'react'
import Form from '../components/Form'




function Contact() {
  return (
    <>
      <h1 className='text-primary-500 text-3xl text-center font-semibold mt-20'>Contact</h1>
      <hr className='w-full my-4 text-secondary-500' />
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quas voluptatum tempora perferendis facilis molestiae excepturi beatae nemo, unde repudiandae soluta, voluptatem ab rem dignissimos. Facere cupiditate dolorem aspernatur? Autem.</p>
      <Form />
      <div className='w-full mt-8 flex justify-center gap-10'>
      <a className='bg-[#166383] px-4 py-2 hover:opacity-80 text-secondary-100' href="#">Linkedin</a>
      <a className='bg-[#08b2f2] px-4 py-2 hover:opacity-80 text-secondary-100' href="#">Telegram</a>
      <a className='bg-[#252525] px-4 py-2 hover:opacity-80 text-secondary-100' href="#">Github</a>
      </div>
    </>
  )
}

export default Contact
