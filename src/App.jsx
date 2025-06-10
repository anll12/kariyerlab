import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import ProjectInfo from './components/ProjectInfo';
import Jury from './components/Jury';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Team />
        <ProjectInfo />
        <Jury />
        <Contact />
      </main>
    </div>
  );
}

export default App;
