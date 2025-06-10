import React from 'react';
import { motion } from 'framer-motion';

const reports = [
  { name: "KariyerLAB Final Report", file: "/reports/KariyerLAB%20Final%20Report.pdf" },
  { name: "Multidisciplinary Delivery Assessment", file: "/reports/Multidisciplinary_delivery_assesment.pdf" },
  { name: "Analysis Report", file: "/reports/Analysis%20Report.pdf" },
  { name: "Project Specification Report", file: "/reports/Project%20Specification%20Report.docx.pdf" },
  { name: "High Level Design Report", file: "/reports/High%20Level%20Design%20Report.pdf" },
  { name: "Detailed Design Report", file: "/reports/Detailed%20Design.pdf" }
];

const pdfIcon = (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#E53935"/>
    <path d="M7 17V7h6l4 4v6a2 2 0 0 1-2 2H7z" fill="#fff"/>
    <text x="8" y="19" fontSize="7" fill="#E53935" fontWeight="bold">PDF</text>
  </svg>
);

const ProjectInfo = () => (
  <section id="project" className="project-section">
    <h2>Proje İçeriği</h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      KariyerLAB, öğrencilerin staj, burs ve iş başvurularını merkezi bir web sitesi üzerinden yapmalarını sağlayan bir platformdur.
      Şirketlerin ve kurumların şeffaf şekilde değerlendirilmesini ve öğrencilerin mağduriyetinin önlenmesini amaçlar.
    </motion.p>

    <div style={{ marginTop: '2rem' }}>
      <h3>Proje Raporları</h3>
      <div className="pdf-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '20px' }}>
        {reports.map((report, idx) => (
          <a
            key={idx}
            href={report.file}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '220px',
              padding: '15px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
          >
            <div className="pdf-icon">{pdfIcon}</div>
            <div className="pdf-title" style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>{report.name}</div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectInfo;
