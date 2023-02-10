import React from 'react';
import './projects.css';
import { AiFillEye } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

// images
import img from '../../Assets/React-Todo-App.png';
import img2 from '../../Assets/L-HABILLEUR-Home.png';
import img3 from '../../Assets/Movix.png';
import img4 from '../../Assets/Vite-React.png';
import img5 from '../../Assets/Apex-Store.png';
import img6 from '../../Assets/Nike-Store.png';





const data = [
  {
    id: 1,
    image: img,
    demo: 'https://dynamic-todo-app23.netlify.app',
    liveLink: '',
    github: 'https://github.com/Saleh0987/react-todo-app',
    title: 'Dynamic Todo App',
    desc: 'This tutorial is perfect for developers looking to improve their skills in modern front-end development.',
    tech1: 'React',
    tech2: 'Redux-Toolkit',
    tech3: 'Tailwind CSS',
  },
  {
    id: 2,
    image: img2,
    demo: 'https://shopping23.netlify.app',
    liveLink: '',
    github: 'https://github.com/Saleh0987/ecommerce-shop',
    title: 'Ecommerce Shop',
    desc: 'This tutorial is perfect for developers looking to improve their skills in modern front-end development.',
    tech1: 'React',
    tech2: 'Redux-Toolkit',
    tech3: 'Firebase',
    tech4: 'CSS',
  },
  {
    id: 3,
    image: img4,
    demo: 'https://modern23.netlify.app/',
    liveLink: '',
    github: 'https://github.com/Saleh0987/Bank_Modern_App',
    title: 'Modern UI/UX',
    desc: 'This tutorial is perfect for developers looking to improve their skills in modern front-end development.',
    tech1: 'React',
    tech2: 'Vitejs',
    tech3: 'Tailwind CSS',
  },

  {
    id: 4,
    image: img6,
    demo: 'https://nike-store23.netlify.app/',
    liveLink: '',
    github: 'https://github.com/Saleh0987/Nike-Store',
    title: 'Modern Nike Store ECommerce',
    desc: 'This tutorial is perfect for developers looking to improve their skills in modern front-end development.',
    tech1: 'React',
    tech2: 'Redux-Toolkit',
    tech2: 'Vite js',
    tech3: 'Tailwind CSS',
  },

  {
    id: 5,
    image: img3,
    demo: 'https://movix-app23.netlify.app',
    liveLink: '',
    github: 'https://github.com/Saleh0987/movix',
    title: 'Movix App',
    desc: 'This tutorial is perfect for developers looking to improve their skills in modern front-end development.',
    tech1: 'React',
    tech2: 'Redux',
    tech3: 'API',
    tech4: 'SCSS'
  },
  

  {
    id: 6,
    image: img5,
    demo: 'https://saleh0987.github.io/Apex-Store/',
    liveLink: '',
    github: 'https://github.com/Saleh0987/Apex-Store',
    title: 'Apex Store`',
    desc: 'This tutorial is perfect for developers looking to improve their skills in modern front-end development.',
    tech1: 'JavaScript',
    tech2: 'CSS',
    tech3: 'HTML',
  },

]


const Projects = () => {
  return (
    <section id='projects' className='projects container section'>
      {/* title section */}
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">Projects
        <div className="underline"><span></span></div>
        </h5>
      </div>


      <div className="projectContainer grid">
        {
          data.map(({ id, github, image, liveLink, desc, demo, title, tech1, tech2, tech3, tech4 }) => {
            return (
              <div key={id} className="singleProject">

              <div className="externalLinks flex">

                <div className="eyeIcon">
                  <a href={demo} target='_blank'>
                    <AiFillEye className='icon'/>
                  </a>
                </div>
                <div className="githubIcon">
                <a href={github} target='_blank'>
                    <FiGithub className='icon'/>
                  </a>
                </div>
              </div>

              <div className="imgDiv">
                <a>
                  <img src={image} alt={title} />
                </a>
              </div>

              <div className="projectTitle">
                <h3>{title}</h3>
              </div>

              <div className="desc">
                {desc}
              </div>

              <div className="technologies flex">
                <small>{tech1}</small>
                <small>{tech2}</small>
                <small>{tech3}</small>
                <small>{tech4}</small>
              </div>

            </div>

            )

          })
        }
      </div>


    </section>
  )
}

export default Projects;