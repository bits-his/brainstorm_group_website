import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './portfolio.styles.css';

export default function Portfolio() {
  const [activeStartup, setActiveStartup] = useState('solutions');
  const startupRefs = useRef({});

  const startups = [
    {
      id: 'solutions',
      name: 'Brainstorm IT Solutions',
      description: 'A leading IT solutions provider specializing in custom software development, web applications, and digital transformation services.',
      link: 'https://brainstorm.ng'
    },
    {
      id: 'likita',
      name: 'My Likita',
      description: 'Healthcare management system that connects patients with healthcare providers, enabling easy access to medical services.',
      link: 'https://mylikita.com'
    },
    {
      id: 'elite',
      name: 'Elite School App',
      description: 'Comprehensive school management system that streamlines educational processes and enhances communication between schools and parents.',
      link: 'https://elscholar.ng'
    },
    {
      id: 'inventria',
      name: 'Inventria',
      description: 'Advanced inventory management system for businesses to track and optimize their stock levels efficiently.',
      link: 'https://inventria-new.netlify.app'
    },
    {
      id: 'bitcoops',
      name: 'Bitcoops',
      description: 'Digital platform for cooperative societies to manage their operations and member transactions seamlessly.',
      link: 'https://www.bitcoops.com'
    },
    {
      id: 'kasuwa',
      name: 'Kasuwa Mall',
      description: 'E-commerce platform connecting local vendors with customers, providing a seamless shopping experience.',
      link: 'https://kasuwamall.com'
    },
    {
      id: 'knowtify',
      name: 'Knowtify',
      description: 'Educational technology platform providing interactive learning experiences and knowledge sharing.',
      link: 'https://www.knowtify.com.ng'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStartup(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(startupRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      <div className="row">
        {/* Sidebar Menu - 3 columns */}
        <div className="col-md-3">
          <div className="portfolio-sidebar">
            <h3>Our Startups</h3>
            <ul className="startup-menu">
              {startups.map((startup) => (
                <li 
                  key={startup.id}
                  className={activeStartup === startup.id ? 'active' : ''}
                >
                  <a href={`#${startup.id}`}>{startup.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content - 9 columns */}
        <div className="col-md-9">
          <div className="portfolio-content">
            {startups.map((startup) => (
              <motion.div
                key={startup.id}
                id={startup.id}
                ref={(el) => (startupRefs.current[startup.id] = el)}
                className="startup-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{startup.name}</h2>
                <p>{startup.description}</p>
                <a 
                  href={startup.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="visit-button"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}