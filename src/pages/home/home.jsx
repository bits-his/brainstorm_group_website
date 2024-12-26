import { useState } from 'react';
import { motion } from 'framer-motion';
import Magnet from './Magnet';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.jpg';
import './home.styles.css';
import PropTypes from 'prop-types';

const HeroBackground = ({ background }) => {
  if (!background) {
    return <div className="hero-background default" />; 
  }

  if (background.type === 'video') {
    return (
      <div className="hero-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src={background.url} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (background.type === 'image') {
    return (
      <div 
        className="hero-background"
        style={{ 
          backgroundImage: `url(${background.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.9)',
          transition: 'all 0.3s ease-in-out'
        }}
      />
    );
  }

  return <div className="hero-background default" />;
};

HeroBackground.propTypes = {
  background: PropTypes.shape({
    type: PropTypes.oneOf(['video', 'image']),
    url: PropTypes.string
  })
};

export default function Home({ sections }) {
  const [hoveredStartup, setHoveredStartup] = useState(null);
  const [isAnyHovered, setIsAnyHovered] = useState(false);

  const startups = [
    { id: 'parent', name: 'Brainstorm Group', logo: logo, abbr: 'BG' },
    { id: 'solutions', name: 'Brainstorm IT Solutions', logo: logo, abbr: 'BIS' },
    { id: 'likita', name: 'My Likita', logo: logo, abbr: 'ML' },
    { id: 'elite', name: 'Elite School App', logo: logo, abbr: 'ESA' },
    { id: 'inventria', name: 'Inventria', logo: logo, abbr: 'INV' },
    { id: 'bitcoops', name: 'Bitcoops', logo: logo, abbr: 'BC' },
    { id: 'kasuwa', name: 'Kasuwa Mall', logo: logo, abbr: 'KM' },
    { id: 'knowtify', name: 'Knowtify', logo: logo, abbr: 'KN' }
  ];

  // Example background config
  const heroBackground = {
    type: 'image',
    url: hero
  };

  return (
    <section className="hero-section" ref={sections.home}>
      <HeroBackground background={heroBackground} />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Brainstorm Group
        </motion.h1>
        

        <div className={`startup-ecosystem ${isAnyHovered ? 'paused' : ''}`}>
          {startups.map((startup) => (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: startup.id === 'parent' ? 0 : 0.2 }}
            >
              <Magnet>
                <div 
                  className={`startup-node ${startup.id} ${startup.id === 'parent' ? 'parent' : ''}`}
                  onMouseEnter={() => {
                    setHoveredStartup(startup.id);
                    setIsAnyHovered(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredStartup(null);
                    setIsAnyHovered(false);
                  }}
                >
                  <img src={startup.logo} alt={startup.name} className="startup-logo" />
                  {hoveredStartup === startup.id && (
                    <motion.div 
                      className="startup-description"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3>{startup.name}</h3>
                    </motion.div>
                  )}
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bottom-logo-strip"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {startups.filter(s => s.id !== 'parent').map((startup) => (
            <div key={startup.id} className="bottom-logo">
              <img src={startup.logo} alt={startup.name} />
              <span className="bottom-logo-name" title={startup.name}>{startup.abbr}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

Home.propTypes = {
  sections: PropTypes.shape({
    home: PropTypes.object
  }).isRequired
};
