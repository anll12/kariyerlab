import React from 'react';
import { motion } from 'framer-motion';

const advisor = {
  name: 'Elif Kurtaran Özbudak',
  photo: 'ElifÖzbudak.webp',
  title: 'Dr. Öğr. Üyesi'
};
const juryMembers = [
  { name: 'Tansel Dökeroğlu', photo: 'TanselDökeroglu.jpg', title: 'Prof. Dr.' },
  { name: 'Özlem Albayrak', photo: 'ozlem-albayrak.png.webp', title: 'Dr. Öğr. Üyesi' },
  { name: 'Venera Adanova', photo: 'VeneraAdanova.jpg', title: 'Dr. Öğr. Üyesi' },
];

const Jury = () => (
  <section id="jury" className="jury-section">
    <h2>Danışman ve Jüri Üyeleri</h2>
    <div className="jury-list">
      <motion.div className="jury-member" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        <img
          src={`/src/assets/${advisor.photo}`}
          alt={advisor.name}
          className="jury-photo"
          style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', marginBottom: '0.5rem', border: '2px solid #00bcd4' }}
        />
        <span style={{ display: 'block', fontWeight: 700, textAlign: 'center' }}>
          <span style={{ color: '#00796b', fontWeight: 600, fontSize: '0.98em', display: 'block', marginBottom: '0.1em' }}>{advisor.title}</span>
          {advisor.name}
          <br />
          <span style={{ fontWeight: 400, fontSize: '0.95em', color: '#00bcd4' }}>(Danışman)</span>
        </span>
      </motion.div>
      {juryMembers.map((member, idx) => (
        <motion.div className="jury-member" key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (idx + 1) * 0.2 }}>
          <img
            src={`/src/assets/${member.photo}`}
            alt={member.name}
            className="jury-photo"
            style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', marginBottom: '0.5rem', border: '2px solid #00bcd4' }}
          />
          <span style={{ display: 'block', fontWeight: 700, textAlign: 'center' }}>
            <span style={{ color: '#00796b', fontWeight: 600, fontSize: '0.98em', display: 'block', marginBottom: '0.1em' }}>{member.title}</span>
            {member.name}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Jury; 