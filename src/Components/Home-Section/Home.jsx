import React from 'react';
import './home.css';
import { AiFillGithub  } from 'react-icons/ai';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { TbArrowBigRightLines, TbChevronsDown } from 'react-icons/tb';

const Home = () => {
  return (
    <section id='home' className='home section'>

      {/* Left Icons */}
      <div className="leftIcons">
        <div className="socials grid">
          <a href="https://github.com/Saleh0987" target={'_blank'}>
              <AiFillGithub className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/saleh23/" target={'_blank'}>
              <FiLinkedin className='icon'/>
          </a>
          <a href="https://twitter.com/Elsaleh23" target={'_blank'}>
              <FiTwitter className='icon'/>
          </a>

          <div className="line"></div>

        </div>
      </div>

      {/* home content */}
      <div className="container homeContainer">
        <span className="introText">
          Hi my name is,
        </span>
        <h1 className="title">
          Mohamed Saleh
        </h1>
        <span className="subTitle">
          I develope scalable web based applications and software.
        </span>
        <p className="homeParagraph">
          I code within required coding standards and styles to serve the exact need.
        </p>

      <div className="lowerHomeSection">
        <button className="contactBtn">
          <a href="#contact" className='flex'>
            Contact Me <TbArrowBigRightLines className='icon'/>
          </a>
          </button>
          
          <div className="scrollDiv">
            <a href="#about" className='flex'>
              <h6 className="scroll">Scroll Down</h6> <TbChevronsDown className='icon down'/>
            </a>
          </div>
        </div>
        
      </div>

      {/* right div */}
      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="mailto:https://mailto:4mesalah@gmail.com" target='_blank'>
                4mesalah@gmail.com
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
      
    </section>
  )
}

export default Home;