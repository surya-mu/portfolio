// import logo from './logo.svg';
import './App.css';
import Exp from './pages/Exp';
// import Hero from './components/Hero';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
// import 'react-router-dom'
// import img from './images/Designer7.png'

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    
    <div className="App container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path= '/skills' element = {<Skills/>}  />
          <Route path='/experience' element={<Exp/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
        {/* <Home/> */}

    </div>
  );
}

export default App;
