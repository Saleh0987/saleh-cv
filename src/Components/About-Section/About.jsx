import React from 'react';
import './about.css';
import { TbCloudDownload } from 'react-icons/tb';
import avatar from '../../Assets/saleh.png';
const About = () => {
  return (
    <section id='about' className='about section container'>

      {/* title section */}
      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">About Me
        <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
          Welcome. I am Mohamed Saleh, I graduated from the Higher Institute for Advanced Studies | Department of Management Information Systems | I am a developer specialized in the area of Frontend , I have worked on many projects.<br/> I use effective technologies and standards which guarantee a quality product. I am seeking a front end job to use my coding skills, troubleshoot complex problems, and help complete projects in a timely manner.<br/> I have experience in HTML, CSS, JavaScript, Bootstrap, TailwindCss, ReactJs, NextJs, Sass, TypeScript and am working on developing my skills. Enthusiastic and self-taught, willing to learn and develop in the best possible way in new technologies, assuming challenges that allow me to develop professionally, always responsible and committed to my duty.
          </h4>

          <div className="aboutBtn">
            <a href="Profile.pdf" download="Profile.pdf" className='flex'>
              DownLoad CV <TbCloudDownload className='icon'/>
            </a>
          </div>

        </div>

        <div className="aboutImgDiv">
          <img src={avatar} alt="MohamedSaleh" className='aboutImg' />
        </div>
      </div>

    </section>
  )
}

export default About;