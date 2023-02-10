import React from 'react';
import './contact.css';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { TbArrowBigRightLines } from 'react-icons/tb';
import { BsWhatsapp } from 'react-icons/bs';

function Contact() {
  return (
    <section id='contact' className='contact section container'>
      {/* title section */}
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">Contact
        <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Talk to me</h3>

          <div className="cards grid">

            <div className="card">
              
            <div>
              <AiFillLinkedin className='icon'/>
            </div>
            <h4>Linkedin</h4>
            <span className="userName">
            @saleh23
            </span>

            <div>
              <a href="https://www.linkedin.com/in/saleh23/"
                target='_blank'  className='flex'>
                Send Message <TbArrowBigRightLines className='icon'/>
              </a>
            </div>

            </div>

            <div className="card"> 
            <div>
              <BsWhatsapp className='icon'/>
            </div>
            <h4>WhatsApp</h4>
            <span className="userName">
            +201112770880
            </span>

            <div>
              <a className='flex'>
                Send Message <TbArrowBigRightLines className='icon'/>
              </a>
            </div>

            </div>

            <div className="card"> 
            <div>
              <AiFillTwitterSquare className='icon'/>
            </div>
            <h4>WhatsApp</h4>
            <span className="userName">
            @Elsaleh23
            </span>

            <div>
              <a className='flex' href='https://twitter.com/Elsaleh23' target='_blank'>
                Send Message <TbArrowBigRightLines className='icon'/>
              </a>
            </div>

            </div>
            
          </div>
        </div>

        <div className="form grid">
          <h3>Send me an email</h3>

          <form action="">
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter your email' />
            <textarea name="message" placeholder='Enter your message'></textarea>
            <buton className="formBtn" type='submit' name='submit'>Send Email</buton>
          </form>
        </div>

      </div>

      </section>
  )
}

export default Contact;