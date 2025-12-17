import React from 'react'
// import Navbar from '../components/Navbar'
import '../styles/Exp.css'
import c1 from '../images/exp1.png'
import c2 from '../images/exp2.png'
import c3 from '../images/exp3.png'
import c4 from '../images/exp4.png'
import c5 from '../images/exp5.jpg'
function Exp() {
  return (
    <div className='container p-0 mb-1'>

        <div className='pt-5 mx-auto'>
                <h2 className="text-light text-center pb-3">
                    Work Experience
                </h2>
          <div className="row text-center mt-3">
                    <div className="col-sm-6 col-md-8 col-8 col-lg-6 cards mx-auto">
                        <div className="row">
                            <div className="col-md-3 bg-dark p-5 col-lg-4 int-logo">
                                    <img className='int-logo'  src="https://tse4.mm.bing.net/th/id/OIP.8wf6xu8ZAzkEzXFQpYQJ2wHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5&o=7&rm=3" alt="" />
                            </div>
                            <div className="col-md-9  col-lg-8">
                                 <h5 className='pt-3 int-title'>Cigna Healthcare </h5>
                                 <p className='text-light int-desc'> QA and Testing Associate Analyst |  Oct 2025 - <b>Present</b></p>
                                 <p className='text-light text-wrap int-para'> Working with Selenium and AccelQ to test CHSI's GIH Web Applications.</p>
                                <span>
                                    <p className="int-skills"> Java ● Selenium ● Appium ● AccelQ </p>
                                    <button className='text-light  bg-dark int-button mx-5'><img src="https://img.icons8.com/?size=15&id=3262&format=png&color=ffffff" alt="" /></button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="row text-center mt-4 pt-2">
                    <div className="col-sm-6 col-md-8 col-8 col-lg-6 cards mx-auto">
                        <div className="row">
                            <div className="col-md-3 bg-dark p-5 col-lg-4 int-logo">
                                    <img className='int-logo'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfObDqU22NfO1ZU6VYAfmye8mIhyFoiYIekw&s" alt="" />
                            </div>
                            <div className="col-md-9  col-lg-8">
                                 <h5 className='pt-3 int-title'>Cigna Healthcare </h5>
                                 <p className='text-light int-desc'> QA & Testing Associate Analyst | Oct 2025 - <b>Present</b></p>
                                 <p className='text-light text-wrap int-para'>Working on Selenium and AccelQ to automate tests on Cigna GIH portal.</p>
                                <span>
                                    <p className="int-skills"> ● Selenium ● Java ● AccelQ </p>
                                    <button className='text-light  bg-dark int-button mx-5'><img src="https://img.icons8.com/?size=15&id=3262&format=png&color=ffffff" alt="" /></button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                <div className="row text-center mt-4 pt-2">
                    <div className="col-sm-6 col-md-8 col-8 col-lg-6 cards mx-auto">
                        <div className="row">
                            <div className="col-md-3 bg-dark p-5 col-lg-4 int-logo">
                                    <img className='int-logo'  src={c2} alt="" />
                            </div>
                            <div className="col-md-9  col-lg-8">
                                 <h5 className='pt-3 int-title'>Chegg India Inc. </h5>
                                 <p className='text-light int-desc'> Freelancer |  May 2024 - <b>Present</b></p>
                                 <p className='text-light text-wrap int-para'>Solved 20+ problems on Computer Science with QS Score of (4.4/5) and CF Score of (4/5).</p>
                                <span>
                                    <p className="int-skills"> ●  Computer Science </p>
                                    <button className='text-light  bg-dark int-button mx-5'><img src="https://img.icons8.com/?size=15&id=3262&format=png&color=ffffff" alt="" /></button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="row mt-4 pt-2">
                <div className="col-sm-6 col-md-8 col-8 col-lg-6 cards mx-auto">
                        <div className="row">
                            <div className="col-md-3 bg-dark  col-lg-4 int-logo">
                                    <img className=' int-logo'  src={c1} alt="" />
                            </div>
                            <div className="col-md-9  col-lg-8">
                                 <h5 className='pt-3 int-title'>CDAC Chennai </h5>
                                 <p className='text-light int-desc'> Developer Intern |  Dec 2023 - Jan 2024</p>
                                 <p className='text-light text-wrap int-para'>Developed a SIEM Dashboard to Monitor realtime network events and security incidents, with around 100+ active users.</p>
                                <span>
                                    <p className="int-skills"> React.js ● Node.js ● ELK Stack  </p>
                                    <button className='text-light  bg-dark int-button   mx-5'><img src="https://img.icons8.com/?size=15&id=3262&format=png&color=ffffff" alt="" /></button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row mt-4 pt-2">
                <div className="col-sm-6 col-md-8 col-8 col-lg-6 cards mx-auto">
                        <div className="row">
                            <div className="col-md-3  col-lg-4 int-logo bg-dark">
                                    <img className=' int-logo'  src={c3} alt="" />
                            </div>
                            <div className="col-md-9 p-2 col-lg-8">
                                 <h5 className='pt-3 int-title'>Necurity Solutions Ltd. </h5>
                                 <p className='text-light int-desc'> Cybersec Analyst Intern |  Nov 2023 - Dec 2023</p>
                                 <p className='text-light text-wrap int-para'>Analyzed potential backdoors using Nmap and created a live network-scraper to check for open ports and threats.</p>
                                <span>
                                    <p className="int-skills"> Python  ●  Zmap  ●  Linux  ●  Bash  </p>
                                    <button className='text-light  bg-dark int-button   mx-5'><img src="https://img.icons8.com/?size=15&id=3262&format=png&color=ffffff" alt="" /></button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <h2 className='text-light text-center mt-4 pt-3'>Training & Externship </h2>
                <div className="row mt-5">
                <div className="col-sm-6 col-md-8 col-8  col-lg-6 cards mx-auto">
                        <div className="row">
                            <div className="col-md-3 p-5 bg-dark col-lg-4 int-logo">
                                    <img className=' int-logo'  src={c4} alt="" />
                            </div>
                            <div className="col-md-9  col-lg-8">
                                 <h5 className='pt-3 int-title'>Ethnus India </h5>
                                 <p className='text-light int-desc'> MERN Stack Development |  Aug 2023 - Nov 2023</p>
                                 <p className='text-light text-wrap int-para'>Developed a School Management system with multiple role access as a central web-hub for students and teachers using MERN.</p>
                                <span>
                                    <p className="int-skills"> Express.js ● React.js ● Node.js ●  MongoDB  </p>
                                    <button className='text-light  bg-dark int-button   mx-5'><img src="https://img.icons8.com/?size=15&id=3262&format=png&color=ffffff" alt="" /></button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row mt-4 pt-2">
                <div className="col-sm-6 col-md-8 col-8 col-lg-6 cards mx-auto">
                        <div className="row">
                            <div className="col-md-3 p-4 bg-dark col-lg-4 int-logo">
                                    <img className=' int-logo'  src={c5} alt="" />
                            </div>
                            <div className="col-md-9   col-lg-8">
                                 <h5 className='pt-3 int-title'>Smartbridge </h5>
                                 <p className='text-light int-desc'> Android App Development |  Aug 2023 - Oct 2023</p>
                                 <p className='text-light text-wrap int-para'>Developed a Realtime Chat Application named QuickChat using Android Studio, as a team of 4.</p>
                                <span>
                                    <p className="int-skills"> Java ● Kotlin ● XML ● Gradle Engine  </p>
                                    <button className='text-light  bg-dark int-button   mx-5'><img src="https://img.icons8.com/?size=15&id=3262&format=png&color=ffffff" alt="" /></button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
        </div>

    </div>
  )
}

export default Exp
