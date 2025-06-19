import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>İletişim</h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
    <p>Bize ulaşmak için:</p>
      <p><a href="mailto:anil.celik@tedu.edu.tr">anil.celik@tedu.edu.tr</a></p>
      <p><a href="mailto:mustafa.karakus@tedu.edu.tr">mustafa.karakus@tedu.edu.tr</a></p>
      <p><a href="mailto:a.hakan.aksoy@tedu.edu.tr">a.hakan.aksoy@tedu.edu.tr</a></p>

    </motion.p>
  </section>
);

export default Contact; 