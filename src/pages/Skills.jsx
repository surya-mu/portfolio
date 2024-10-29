import React from 'react'
import Navbar from '../components/Navbar'
// import { Link } from 'react-router-dom'
import '../styles/Skills.css'
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'
import c7 from '../images/c7.png'
import c8 from '../images/c8.png'
import c9 from '../images/c9.png'
import c10 from '../images/c10.png'
import c11 from '../images/c11.png'
import c12 from '../images/c12.png'
import left from '../images/caret-circle-left.svg'
import right from '../images/caret-circle-right.svg'
import e1 from '../images/e1.png'
import e2 from '../images/e2.png'
import e3 from '../images/e3.png'
import { useEffect } from 'react'


function Skills() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    // const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl));
  }, []);
  // const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  return (
    <div className='container p-0 mb-1'>
      <div className="fornav mt-5">
        <Navbar />
      </div>
            <div className='content-scroll'>
            <div className="my-skills mt-5 pt-5">
                  <h2 className='text-light text-center my'>My Skills</h2>
                  {/* <h4 className='text-light ps-5 py-5 ms-5' style={{ display: "inline", fontSize: "25.5px" }}>Proficient Programming Languages</h4> */}
                    <div className="image-container">
                      {/* <!-- Programming Languages --> */}
                      <div className="col-md-4 mx-auto">
                      <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" className="skill-icons2 " data-bs-toggle="tooltip" data-bs-title="Python"/>
                      <img src="https://img.icons8.com/?size=100&id=shQTXiDQiQVR&format=png&color=000000" alt="C" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="C" />
                      <img src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000" alt="C++" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="C++" />
                      <img src="https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000" alt="Java" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Java" />
                      </div>
                      {/* <!-- Technologies Known --> */}
                      <div className="col-md-4 mx-auto">
                      <img src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000" alt="Express.js" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Express.js" />
                      <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML5" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="HTML5" />
                      <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS3" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="CSS3" />
                      <img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="Node.js" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Node.js" />
                      </div>
                      <div className="col-md-4 mx-auto">
                      <img src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" alt="React.js" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="React.js" />
                      <img src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" alt="Bootstrap" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Bootstrap" />
                      <img src="https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000" alt="MySQL" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="MySQL" />

                      {/* <!-- Tools & Utilities --> */}
                      <img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="Git" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Git" />
                      </div>
                      <div className="col-md-4 mx-auto">
                      <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="Github" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Github" />
                      <img src="https://img.icons8.com/?size=100&id=HF4xGsjDERHf&format=png&color=000000" alt="LinuxOS" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="LinuxOS" />
                      <img src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="Figma" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Figma" />
                      <img src="https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000" alt="PostmanAPI" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="PostmanAPI" />
                      </div>
                      <div className="col-md-4 mx-auto">
                      {/* <!-- Social Skills --> */}
                      <img src="https://img.icons8.com/?size=100&id=HFG5UTj0PxrB&format=png&color=000000" alt="Teamwork" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Teamwork" />
                      <img src="https://img.icons8.com/?size=100&id=103407&format=png&color=000000" alt="Communication" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Communication" />
                      <img src="https://img.icons8.com/?size=100&id=eo7oyvlYn4yl&format=png&color=000000" alt="Problem Solver" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Problem Solver" />
                      <img src="https://img.icons8.com/?size=100&id=L14NQM6p2YgS&format=png&color=000000" alt="Research Ability" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Research Ability" />
                      </div>
                      {/* <!-- Additional Skills --> */}
                      <div className="col-md-4 mx-auto">
                      <img src="https://img.icons8.com/?size=100&id=sFFBQN8kzSOS&format=png&color=000000" alt="VMWare" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="VMWare" />
                      <img src="https://img.icons8.com/?size=100&id=rOHcpTUtCTjr&format=png&color=000000" alt="Wireshark" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Wireshark" />
                      <img src="https://img.icons8.com/?size=100&id=PW0ChfedZvTh&format=png&color=000000" alt="Metasploitable" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Metasploitable" />
                      {/* <img src="https://img.icons8.com/?size=100&id=21831&format=png&color=000000" alt="Markdown" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Markdown" /> */}
                      <img src="https://img.icons8.com/?size=100&id=55O6KKA9CyIA&format=png&color=000000" alt="Unity" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Unity" />
                      {/* <img src="https://img.icons8.com/?size=100&id=b8sdBSRPX1RX&format=png&color=000000" alt="Scratch" className="skill-icons2" data-bs-toggle="tooltip" data-bs-title="Scratch" /> */}
                      </div>
                    </div>

            </div>
            <div className="checkout mx-auto text-center py-3 mb-3">
             <button  onClick={() => window.scrollBy({ top: 700, behavior: 'smooth' })} className="btn text-center mx-2" style={{backgroundColor:"#7d9bf6"}}>See my Certifications  &nbsp; <img width="15" height="15" src="https://img.icons8.com/?size=100&id=41202&format=png&color=000000" alt="external-arrow-up-right-arrows-thin-kawalan-studio"/></button>
             {/* <Link to='/experience'><button className='btn btn-dark text-light mx-2'>My Work -&gt;</button></Link>  */}
            </div>
          

          <div id="carouselExampleDark" className="carousel carousel-dark slide col-md-5 mx-auto pt-5" data-bs-theme="dark" data-bs-wrap="true" data-bs-ride="carousel">
        <h3 className='text-light pb-4 text-center certi'>My Certifications</h3>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="11" aria-label="Slide 12"></button>
        </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={c1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>MERN Full Stack Externship (Ethnus)</h5>
        <p>HTML • CSS • Bootstrap • Javascript • ReactJS • NodeJS</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={c2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Android App Development (Smartbridge)</h5>
        <p>Kotlin • Java • XML • Android Studio</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>AI Text Summarizer (Postman)</h5>
        <p>HTML • CSS • Javascript • Postman</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c4} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Image Processing Onramp (MATLAB)</h5>
        <p>• MATLAB</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c5} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Google Cloud Foundations (NPTEL)</h5>
        <p>Cloud Computing • Google Cloud </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c6} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Student Expert (Postman)</h5>
        <p>REST API • JSON • Postman</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c7} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>ReactJS Essentials (Linkedin)</h5>
        <p>Javascript • React JS</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c8} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Javascript Essentials (Linkedin)</h5>
        <p>Javascript </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c9} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Intro to Git & Github (Google IT)</h5>
        <p>Git • Github • Linux</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c10} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5 className='text-nowrap'>Using Python & Interacting with OS (Google)</h5>
        <p>Linux • Python • Bash • Shell Scripting</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c11} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Crash Course on Python (Google)</h5>
        <p>Python • Linux </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c12} className="d-block w-100" alt="..."/>
      <div className="carousel-caption">
        <h5>Build A Web App with Flask (Coursera)</h5>
        <p>Python • Flask • Django</p>
      </div>
    </div>

    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <img src={left} alt="Previous" className="custom-icon" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <img src={right} alt="Next" className="custom-icon" />
    <span className="visually-hidden">Next</span>
  </button>
          </div>
          <div id="carouselExampleLight" className="carousel carousel-dark slide col-md-5 mx-auto pt-5 mt-5" data-bs-theme="dark" data-bs-wrap="true" data-bs-ride="carousel">
    <h3 className='text-light pb-4 text-center extra'>Extra Curriculars</h3>
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleLight" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner mb-5">
        <div className="carousel-item active" data-bs-interval="1900">
            <img src={e2} className="d-block w-100" alt="Slide 1"/>
            <div className="carousel-caption">
                <h5>Git/Github Workshop</h5>
                <p> • Git </p>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="1500">
            <img src={e1} className="d-block w-100" alt="Slide 2"/>
            <div className="carousel-caption">
                <h5>Open Source Odyssey</h5>
                <p>Open Source • Git</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={e3} className="d-block w-100" alt="Slide 3"/>
            <div className="carousel-caption">
                <h5>Hacktoberfest 2023</h5>
                <p>Git • Github • Open Source</p>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="prev">
        <img src={left} alt="Previous" className="custom-icon" />
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleLight" data-bs-slide="next">
        <img src={right} alt="Next" className="custom-icon" />
        <span className="visually-hidden">Next</span>
    </button>
    </div>
</div>

      

      </div>
  )
}

export default Skills