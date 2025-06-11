import React from 'react'
// import Navbar from '../components/Navbar'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className='p-0 container'>

      <div className='pt-5 mt-5'>
        <h2 className="text-light text-center mb-5 ">Projects</h2>
      </div>
      <div className='project-container row px-5 mt-4'>
        <div className="project-card flex col-lg-6 col-12 col-sm-12 mb-4">
          <div className="project-overlay">
            <a href="https://zapplink.tech/" target="_blank" rel="noopener noreferrer">
              <img src={p6} height='300' width='450' alt="Lost and Found Web Application" className="project-logo" />
            </a>
          </div>
          <h4 className="project-title text-light text-center mt-3 ">ZappLink - A URL Shortening Web App</h4>
          <p className="project-desc text-light pt-1 text-center px-5 text-wrap ms-auto">
            Zapplink serves as a URL-Shortening service, built on a Custom API and Domain, using MERN Stack.
            </p>
          {/* <p className='text-light project-desc2 text-center px-5'>Built using MERN Stack and Tailwind CSS</p> */}
        </div>

        <div className="project-card flex col-lg-6 col-12 col-sm-12 mb-4">
          <div className="project-overlay">
            <a href="https://lost-found-web-application.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={p1} height='300' width='450' alt="Lost and Found Web Application" className="project-logo" />
            </a>
          </div>
          <h4 className="project-title text-light text-center mt-3 ">Lost and Found Web Application v2.0</h4>
          <p className="project-desc text-light pt-1 text-center px-5 text-wrap ms-auto">This Revamped Web Platform aims to create a Central hub for the students in our university campus. Built using MERN Stack</p>
          {/* <p className='text-light project-desc2 text-center px-5'>Built using MERN Stack and Tailwind CSS</p> */}
        </div>

        <div className="project-card flex col-lg-6 col-12 col-sm-12 mb-4">
          <div className="project-overlay">
            <a href="https://surya-mu.github.io/AI-Summarizer-WebApp/" target="_blank" rel="noopener noreferrer">
              <img src={p2} height='300' width='400' alt="AI-Powered Text Summarizer" className="project-logo" />
            </a>
          </div>
          <h4 className="project-title text-light text-center mt-3">AI-Powered Text Summarizer</h4>
          <p className="project-desc text-light pt-1 text-center">A BART Text-Summarizer LLM based Web Platform, that can be used for summarizing a large content of text.</p>
        </div>

        <div className="project-card flex col-lg-6 col-12 col-sm-12 mb-4">
          <div className="project-overlay">
            <a href="https://github.com/surya-mu/Dashboard-SIEM" target="_blank" rel="noopener noreferrer">
              <img src={p3} height='300' width='400' alt="Security and Information Event Management Dashboard" className="project-logo" />
            </a>
          </div>
          <h4 className="project-title text-light text-center mt-3">Security and Information Event Management Dashboard</h4>
          <p className="project-desc text-light pt-1 text-center">An Incident Management and Security Tool Dashboard for Network Administrative Monitoring and Logging.</p>
        </div>
        <div className="project-card flex col-lg-6 col-12 col-sm-12 mb-4">
          <div className="project-overlay">
            <a href="https://lost-n-found-hub-vitc.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={p4} height='300' width='400' alt="Security and Information Event Management Dashboard" className="project-logo" />
            </a>
          </div>
          <h4 className="project-title text-light text-center mt-3">Lost & Found Website v1.0</h4>
          <p className="project-desc text-light pt-1 text-center">A Central hub for Students to Report and Claim their Belongings in the University Campus, With around 100 Active Users.</p>
        </div>
      </div>
      <div className='pt-5'>
        <h2 className="text-light text-center mb-5">Research </h2>
    </div>
    <div className="project-container mb-5 px-5 row">
    <div className="project-card mx-auto  flex col-lg-6 col-12 col-sm-12 mb-4">
          <div className="project-overlay">
            <a href=" https://www.kaggle.com/code/musurya/a-yolov11-wbf-herbicide-resistant-weed-detection" target="_blank" rel="noopener noreferrer">
              <img src={p5} height='300' width='400' alt="Research Project" className="project-logo" />
            </a>
          </div>
          <h4 className="project-title text-light text-center mt-3">Herbicide Resistant Weed Detection using YOLOv11 and Weighted Box Fusion</h4>
          <p className="project-desc text-light pt-1 text-center">A Novel Ensemble Approach to Detect Herbicide-Resistant Weeds using YOLOv11-WBF pipeline.</p>
        </div>
    </div>
    </div>
  )
}

export default Projects
