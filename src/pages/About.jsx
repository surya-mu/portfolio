import React from 'react';
// import Navbar from '../components/Navbar';
import im from '../images/Designer10.png';
import '../styles/About.css';
import ContactForm from '../components/ContactForm';
// import p7 from '../images/p7.png';

function About() {
  return (
    <div className="about container">
      


      <div className="row align-items-center card p-5 my-4 shadow-sm">
        <div className="col-lg-6 text-center mb-5">
          {/* <img src={im} width="250" height="250" alt="profile" className="about-logo mx-auto d-inline" /> */}
        </div>
        <div className="col-lg-6 text-light text-center text-lg-start">
          <h3 className='text-center'>Why should you <span className="purple">Hire Me?</span></h3>
          <p>I love <span className="purple">developing</span> stuff! Creativity is my core value. Building projects from scratch excites me, and I constantly look for ways to improve and innovate.</p>
          <p>I have a strong interest in <span className="purple">Web Development</span>, <span className="purple">Software Development</span>, and exploring <span className="purple">Open Source</span> projects. Artificial Intelligence fascinates me, especially in how it can enhance and expand human capabilities.</p>

          <ContactForm/>
        </div>
      </div>


    </div>
  );
}

export default About;
