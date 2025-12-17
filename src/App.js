// import logo from './logo.svg';
import './App.css';
import Exp from './pages/Exp';
// import Hero from './components/Hero';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
// import ReactFullpage from '@fullpage/react-fullpage';

// import 'react-router-dom'
// import img from './images/Designer7.png'

// import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import '../src/App.css'

function App() {
  return (
    
    <div className="App container"
      >
            <Navbar/>
            <section id="home" style={{minHeight:"100vh"}}>  <Home/> </section>
            <section id="skills" style={{minHeight:"100vh"}}> <Skills/>  </section>
            <section id="projects" style={{minHeight:"100vh"}}> <Projects/>   </section>
            <section id="experience" style={{minHeight:"100vh"}}> <Exp/>   </section>
            <section id="about" style={{minHeight:"100vh"}}> <About/> </section>

    </div>
  );
}

export default App;
