import React from 'react';
import '../styles/Hero.css'
import Navbar from './Navbar'
import url from '../Resume2024.pdf'
import img from '../images/Designer7.png';
// const GithubCalendar = require('github-calendar');
// import { useEffect } from 'react';




function Hero() {
 
  return (
    <div className="hero mt-5">
      <Navbar/>
      <div className="hero-image text-center mx-auto">
        <img src={img} alt="Profile"  />
      </div>
      <div className="hero-title text-light mt-4">
        <h3>Hey! I'm Surya.</h3>
        <h4 className='hero-desc ps-2'> Web Developer. UI Enthusiast. Open Source Contributor.</h4>
        <a href={url} download='Resume2024' className="resume btn text-dark bg-light text-bold cursor-pointer"> 
          Resume 
          <img width="24" height="24" src="https://img.icons8.com/external-thin-kawalan-studio/24/external-arrow-up-right-arrows-thin-kawalan-studio.png" alt="external-arrow-up-right-arrows-thin-kawalan-studio"/>
           </a>
     </div>
     <div className="icons text-center mt-5">
        <a target='blank' href="https://linkedin.com/in/suryamu7" className='socials'><svg fill="white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg></a> 
        <a target='blank' href='https://github.com/surya-mu' className='socials'><svg fill="white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg></a>
        <a target='blank' href="mailto:musurya2014@gmail.com" className='socials'><svg fill='white' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
            <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
        </svg></a>
     </div>
      {/*<div className="stats text-center mt-5 flex gap-3">
      <img src="https://streak-stats.demolab.com?user=surya-mu&theme=discord-old-blurple" className='' alt="GitHub Streak" />
      { <a href="https://git.io/streak-stats"><img src="https://streak-stats.demolab.com?user=surya-mu&theme=highcontrast" alt="GitHub Streak" /></a> }
      <img src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=surya-mu&theme=discord_old_blurple" alt='stats' />
     </div>*/}
    </div>
  )
}

export default Hero