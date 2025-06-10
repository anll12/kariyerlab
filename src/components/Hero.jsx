import React from 'react';
// import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="hero" className="hero-section" style={{background:'#fff', borderRadius:'8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}} >
   <motion.img 
  src="/logo.png" 
  alt="KariyerLab Logo" 
  className="hero-logo" 
  initial={{ opacity: 0, y: -40 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1 }} 
  style={{ width: '250px', height: 'auto' }} 
/>

    {/* <motion.img src={logo} alt="KariyerLab Logo" className="hero-logo" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} /> */}
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
      KariyerLab
    </motion.h1>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
      Öğrenciler için staj, burs ve iş başvurularında güvenli ve şeffaf bir platform.
    </motion.p>
    
  </section>
);

export default Hero; 