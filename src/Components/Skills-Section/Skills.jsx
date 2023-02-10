import React from 'react';
import './skills.css';
import { FaReact, FaHtml5, FaGitSquare, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoSass} from 'react-icons/io';
import { SiCss3, SiTypescript, SiAdobexd, SiAdobephotoshop, SiTailwindcss, SiJquery, SiFirebase } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';

const Skills = () => {
  return (
    <section id='skills' className='skills container seection'>
      {/* title section */}
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">Skills
        <div className="underline"><span></span></div>
        </h5>
      </div>

      {/* skills container */}
      <div className="skillsContainer grid">

        <div className="skillGroup">

          {/* title group */}
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            <span className="subTitle">1 Years Experience</span>
          </div>

          <div className="generalSkills">

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaReact className='icon'/>
              </div>
              <span className='skillName'>React</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon'/>
              </div>
              <span className='skillName'>JavaScript</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className='icon'/>
              </div>
              <span className='skillName'>Sass</span>
            </div>
            
            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className='icon'/>
              </div>
              <span className='skillName'>CSS</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className='icon'/>
              </div>
              <span className='skillName'>HTML</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTypescript className='icon'/>
              </div>
              <span className='skillName'>TypeScript</span>
            </div>

          </div>

        </div>

        <div className="skillGroup">
          {/* title group */}
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            <span className="subTitle">1 Years Experience</span>
          </div>

          <div className="generalSkills">

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <CgFigma className='icon'/>
              </div>
              <span className='skillName'>Figma</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobexd className='icon'/>
              </div>
              <span className='skillName'>XD</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobephotoshop className='icon'/>
              </div>
              <span className='skillName'>Photoshop</span>
            </div>

          </div>

        </div>

        <div className="skillGroup">
          {/* title group */}
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">1 Years Experience</span>
          </div>

          <div className="generalSkills">

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className='icon'/>
              </div>
              <span className='skillName'>Github</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className='icon'/>
              </div>
              <span className='skillName'>Git</span>
            </div>

            {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiFirebase className='icon'/>
              </div>
              <span className='skillName'>Firebase</span>
            </div>

             {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaBootstrap className='icon'/>
              </div>
              <span className='skillName'>Bootstrap</span>
            </div>

             {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiJquery className='icon'/>
              </div>
              <span className='skillName'>Jquery</span>
            </div>

             {/* single div skill */}
            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTailwindcss className='icon'/>
              </div>
              <span className='skillName'>TailwindCss</span>
            </div>

          </div>

        </div>


      </div>


    </section>
  )
}

export default Skills;