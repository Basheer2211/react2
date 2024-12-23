import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx';
import Second from './second.jsx';
import Thrid from './Thrid.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import './App.css'

function App() {
 

  return    (
    <>
      <Navbar />
     <Second />
     <Thrid />
     <About />
     <Contact />
    </>
  );
  
   

}

export default App;
