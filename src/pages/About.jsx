import React from 'react';
import Navbar from '../components/Navbar';
import im from '../images/Designer10.png';
import '../styles/About.css';
import p7 from '../images/p7.png';

function About() {
  return (
    <div className="about container">
      <div className="fornav mt-5">
        <Navbar />
      </div>

      {/* Profile Section */}
      <div className="row align-items-center card p-5 my-4 shadow-sm">
        <div className="col-lg-6 text-center mb-5">
          <img src={im} width="250" height="250" alt="profile" className="about-logo mx-auto d-inline" />
        </div>
        <div className="col-lg-6 text-light text-center text-lg-start">
          <h3>Hey, I'm <span className="purple">Surya</span></h3>
          <p>I love <span className="purple">developing</span> stuff! Creativity is my core value. Building projects from scratch excites me, and I constantly look for ways to improve and innovate.</p>
        </div>
      </div>

      {/* Tech Interests Section */}
      <div className="row align-items-center card p-4 my-4 shadow-sm">
        <div className="col-lg-6 text-light">
          <h4>My Tech Interests -&gt;</h4>
          <p>I have a strong interest in <span className="purple">Web Development</span>, <span className="purple">Software Development</span>, and exploring <span className="purple">Open Source</span> projects. Artificial Intelligence fascinates me, especially in how it can enhance and expand human capabilities.</p>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="row align-items-center card p-4 my-5 shadow-sm">
        <div className="col-lg-3 text-center">
          <img src="https://img.icons8.com/?size=100&id=6470&format=png&color=FFFFFF" width="50" height="50" alt="typing icon" className="d-block mx-auto my-2" />
          <h3 className="text-light purple">104 WPM</h3>
          <h5>
            <a href="https://monkeytype.com/profile/NotFlam3" target="_blank" className="text-decoration-none text-light">My Typing Profile -&gt;</a>
          </h5>
        </div>
        <div className="col-lg-9 text-light text-center my-5 pt-5">
          <h4>Hobbies</h4>
          <p className='text-wrap text-center'>In my free time, I enjoy listening to rock and hip-hop music, reading sci-fi novels, <br /> and diving into movies from the science fiction genre.</p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="row align-items-center card p-4 my-4 shadow-sm">
        <div className="col-lg-6 text-light text-center">
          <h4>Social Presence</h4>
          <p>I enjoy sharing stories and have a following of 140 people, with over 1K readers on Wattpad.</p>
        </div>
        <div className="col-lg-6 d-flex justify-content-around align-items-center">
          <h6>
            <a href="" className="text-decoration-none">
              <img src="https://img.icons8.com/?size=100&id=7MVqRZGHUik6&format=png&color=000000" width="30" height="30" alt="wattpad icon" />
              &nbsp;Wattpad -&gt;
            </a>
          </h6>
          <h6>
            <a href="https://open.spotify.com/user/ehu771r2momsqr5pwlv10jqp9" target="_blank" className="text-decoration-none">
              <img src="https://img.icons8.com/?size=100&id=G9XXzb9XaEKX&format=png&color=000000" width="30" height="30" alt="spotify icon" />
              &nbsp;Spotify -&gt;
            </a>
          </h6>
          <h6>
            <a href="https://instagram.com/surya07.10" target="_blank" className="text-decoration-none">
              <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" width="30" height="30" alt="instagram icon" />
              &nbsp; Insta -&gt;
            </a>
          </h6>
        </div>
      </div>

      {/* Guitar and Sports Section */}
      <div className="row align-items-center card p-4 my-4 shadow-sm">
        <div className="col-lg-6 text-light text-center">
          <h4>Passions</h4>
          <p>I'm a Trinity Grade 3 Qualified Guitarist with a deep love for music. In addition to playing the guitar, I enjoy sports like swimming, badminton, and football.</p>
        </div>
        <div className="col-lg-6 text-center">
          <img src={p7} alt="guitar" width="180" height="180" className="object-fit-contain" />
        </div>
      </div>

      {/* Current Project Section */}
      <div className="row align-items-center card p-4 my-4 shadow-sm">
        <div className="col-lg-6 text-light">
          <h3 className='text-center current'>Current Project</h3>
          <p className='text-center pt-3'>I'm currently developing a <span className="purple">Course Web Platform</span>, a ReactJS-based application centralizing free courses to a single hub.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
