import React, { useState } from 'react'

function Me() {
  const fulltext = `My name is Henok, a self-taught frontend website developer with a burning passion for transforming intricate designs into beautiful, functional code. With over two years of experience in the field, I've honed my skills in HTML, CSS, and JavaScript, making me adept at crafting user-friendly and visually appealing websites.

  During my journey, I've delved into popular CSS frameworks like Bootstrap, Tailwind CSS, and Material UI, enhancing my ability to create responsive, eye-catching layouts. Moreover, I'm well-versed in React.js, a leading frontend framework, which empowers me to build dynamic and interactive web applications for JavaScript enthusiasts.
  
  Being a perpetual learner, I relish embracing new challenges and staying updated with the latest industry trends. My curiosity drives me to seek innovative solutions and keeps my skill set fresh.
  
  In addition to my technical proficiency, I pride myself on effective communication and collaboration. As an Ethiopian developer, I bring a unique perspective and cultural diversity to my work, enriching the projects I engage with.
  
  Currently, I'm freelancing on platforms like Upwork, where I bring my expertise to clients worldwide. My goal is to continue crafting remarkable websites and applications, showcasing the fusion of my skills and creative vision. Welcome to my portfolio, a testament to my dedication to the world of web development.`
  const slicedText = fulltext.slice(0, 200);

  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className='bg-secondary-800 text-secondary-300 group py-5 px-7 col-span-2 md:px-10 rounded-xl'>
      <h2 className='m-2 ml-[10%] text-2xl text-primary-500 font-bold'>About Me</h2>
      <hr className='w-[80%] mx-auto' />
      <p className='my-3 leading-relaxed text-lg group:focus:text-200'>{showFullText ? fulltext : `${slicedText}...`}
        <button className='text-primary-600 ml-2' onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? "Less" : "More"}
        </button>
      </p>

    </div>
  )
}

export default Me
