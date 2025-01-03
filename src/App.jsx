import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx';
import Second from './second.jsx';
import Thrid from './Thrid.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css'


function App() {
 

  return    (
    <>
      <Navbar />
      <Second />
      <Routes>
        <Route path='/thrid' element={<Thrid />}> </Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/contact' element={<Contact />}> </Route>


      </Routes>
      
     
    
    </>
  );
  
   

}

export default App;
