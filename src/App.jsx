import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import About from './components/About/about';
import Project from './components/Projects/projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/contact';



function App() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  

  return (
    <>
      <div className="header-wrapper">
      <Navbar 
  scrollToSection={scrollToSection} 
  sectionRefs={{ 
    aboutRef, 
    projectRef, 
    skillRef,
    contactRef 
  }} 
/>

<Header />
      <div ref={aboutRef}><About /></div>
      <div ref={projectRef}><Project /></div>
      <div ref={skillRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>

      </div>
    </>
  );
}

export default App;
