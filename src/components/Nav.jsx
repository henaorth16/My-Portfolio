import React from 'react'
import { useState, useEffect } from 'react'
function Nav() {
  const [isNav, setIsNav] = useState(false)

  function handleClick() {
    setIsNav(!isNav)
  }


  return (
    <div id='nav'>
      <div onClick={handleClick} className='icon'>
        <span className='h-1 w-full bg-secondary-300'></span>
        <span className='h-1 w-full bg-secondary-300'></span>
        <span className='h-1 w-full bg-secondary-300'></span>
      </div>
      <div className='links' style={{display: isNav ? "flex" : "none"}}>
        <ul className=''>
          <li><a onClick={handleClick} href="#home">Home</a></li>
          <li><a onClick={handleClick} href="#about">About</a></li>
          <li><a onClick={handleClick} href="#portfolio">Projects</a></li>
          <li><a onClick={handleClick} href="#testimony">Testimony</a></li>
          <li><a onClick={handleClick} href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
