import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Anıl Çelik', photo: 'Anılçelik.jpg' },
  { name: 'Ahmet Hakan Aksoy', photo: 'AhmetHakanAksoy.jpeg' },
  { name: 'Mustafa Karakuş', photo: 'MustafaKarakus.jpeg' },
];

const Team = () => (
  <section id="team" className="team-section">
    <h2>Proje Ekibi</h2>
    <div className="team-list">
      {teamMembers.map((member, idx) => (
        <motion.div className="team-member" key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }}>
          <img
            src={`/src/assets/${member.photo}`}
            alt={member.name}
            className="team-photo"
            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', marginBottom: '0.5rem',  }}
          />
          <span>{member.name}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Team; 