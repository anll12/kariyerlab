import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>İletişim</h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      Bize ulaşmak için: <a href="mailto:info@kariyerlab.com">info@kariyerlab.com</a>
    </motion.p>
  </section>
);

export default Contact; 