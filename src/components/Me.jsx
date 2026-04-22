import React, { useState } from 'react'
import Title from './Title';

function Me() {
  const fulltext = `My name is Henok, a self-taught full-stack developer with over three years of experience, primarily focused on frontend development. I specialize in building responsive, high-performance web applications using Next.js, React.js, HTML, CSS, and JavaScript, with strong attention to clean UI/UX and performance.
On the frontend, I’m experienced with Tailwind CSS, Shadcn Ui, and Material UI for creating modern, scalable interfaces. On the backend, I work with Node.js frameworks like Express.js and NestJS to build reliable APIs and integrate full-stack systems efficiently.
I continuously improve my skills by staying up to date with modern technologies and best practices. Currently freelancing, I’ve delivered real-world projects for global clients and aim to contribute my expertise to building impactful, production-ready applications.`
  const slicedText = fulltext.split(' ').slice(0, 20).join(' ');

  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className='bg-secondary-800 text-secondary-300 group py-5 px-7 col-span-2 md:px-10 rounded-xl'>
      <Title title="About Me"/>
      <p className='my-3 md:leading-relaxed text-lg group:focus:text-200 text-justify md:px-6'>{showFullText && fulltext.split(' ').length > 25 ? fulltext : `${slicedText}...`}
        <button className='text-primary-600 ml-2' onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? "Less" : "More"}
        </button>
      </p>

    </div>
  )
}

export default Me
