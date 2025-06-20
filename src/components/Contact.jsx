import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>İletişim</h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
    <p>Bize ulaşmak için:</p>
      <p><a href="mailto:anilcelik84@gmail.com">anilcelik84@gmail.com</a></p>
      <p><a href="mailto:mstfkarakus42@gmail.com">mstfkarakus42@gmail.com</a></p>
      <p><a href="mailto:ahmet.hakanaksoy2@gmail.com">ahmet.hakanaksoy2@gmail.com</a></p>

    </motion.p>
  </section>
);

export default Contact; 