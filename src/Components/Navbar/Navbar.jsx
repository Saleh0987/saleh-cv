import React, {useState} from 'react';
import './navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { motion } from 'framer-motion';


const Navbar = () => {

  // show and hide navbar
  const [active, setActive] = useState('navBar');
  const showNavBar = () => {
    setActive('navBar activeNavBar')
  }
  const removeNavBar = () => {
    setActive('navBar')
  }

  const [activeHeader, setActiveHeader] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader('header activeHeader')
    } else {
      setActiveHeader('header')
    }
  }
  window.addEventListener('scroll', addBg);


  return (
    <header className={activeHeader}>

      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className="logoDiv">
        <h1 className="logo"><a href="#home">Ms.</a></h1>
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 1}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className={active}>
        <ul onClick={removeNavBar} className="navLists">
          <li className="navItem">
            <a href="#about" className='navLink'><span className='headerNumber'>1.</span>About</a>
          </li>

          <li className="navItem">
            <a href="#skills" className='navLink'><span className='headerNumber'>2.</span>Skills</a>
          </li>

          <li className="navItem">
            <a href="#projects" className='navLink'><span className='headerNumber'>3.</span>Projects</a>
          </li>

          <li className="navItem">
            <a href="#contact" className='navLink'><span className='headerNumber'>4.</span>Contact</a>
          </li>

          <button className='btn'>
              <a href="/#">Resume</a>
          </button>

        </ul>

        <div onClick={removeNavBar} className="closeNavBar">
            <AiFillCloseCircle className='icon'/>
        </div>

      </motion.div>

      <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className='icon'/>
      </div>

    </header>
  )
}

export default Navbar;