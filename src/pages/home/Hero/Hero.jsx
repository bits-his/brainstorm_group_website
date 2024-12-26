
import { motion } from "framer-motion";
// import Magnet from './Magnet';
import logo from "../../../assets/logo.png";
import mylikita from "../../../assets/logos/1.jpg";
import elite from "../../../assets/logos/2.jpg";
import inventria from "../../../assets/logos/inv.png";
import bitcoops from "../../../assets/logos/bit-removebg-preview.png";
import kasuwa from "../../../assets/logos/KASUWAMALL__2_-removebg-preview.png";
import knowtify from "../../../assets/logos/knowtify.png";
import hero from "../../../assets/hero.jpg";
import "../../../pages/home/home.styles.css";
import PropTypes from "prop-types";

const HeroBackground = ({ background }) => {
  if (!background) {
    return <div className="hero-background default" />;
  }

  if (background.type === "video") {
    return (
      <div className="hero-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={background.url} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (background.type === "image") {
    return (
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${background.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.9)",
          transition: "all 0.3s ease-in-out",
        }}
      />
    );
  }

  return <div className="hero-background default" />;
};

HeroBackground.propTypes = {
  background: PropTypes.shape({
    type: PropTypes.oneOf(["video", "image"]),
    url: PropTypes.string,
  }),
};

export default function Hero({ ref }) {


  const startups = [
    { id: 'parent', name: 'Brainstorm Group', logo: logo, abbr: 'BG', link: 'https://brainstormgroup.com', description: 'Brainstorm Group is a group of companies that provide a range of services to businesses and individuals.' },
    { id: 'solutions', name: 'Brainstorm IT Solutions', logo: logo, abbr: 'BIS', link: 'https://brainstormitsolutions.com', description: 'Brainstorm IT Solutions is a company that provides IT solutions to businesses and individuals.'    },
    { id: 'likita', name: 'My Likita', logo: mylikita, abbr: 'ML', link: 'https://mylikita.com', description: 'My Likita is a platform that allows users to manage their daily tasks and schedules.' },
    { id: 'elite', name: 'Elite School App', logo: elite, abbr: 'ESA', link: 'https://eliteschoolapp.com', description: 'Elite School App is a platform that allows users to manage their daily tasks and schedules.' },
    { id: 'inventria', name: 'Inventria', logo: inventria, abbr: 'INV', link: 'https://inventria.com', description: 'Inventria is a company that provides a range of services to businesses and individuals.' },
    { id: 'bitcoops', name: 'Bitcoops', logo: bitcoops, abbr: 'BC', link: 'https://bitcoops.com', description: 'Bitcoops is a company that provides a range of services to businesses and individuals.' },
    { id: 'kasuwa', name: 'Kasuwa Mall', logo: kasuwa, abbr: 'KM', link: 'https://kasuwa.com', description: 'Kasuwa Mall is a platform that allows users to manage their daily tasks and schedules.' },
    { id: 'knowtify', name: 'Knowtify', logo: knowtify, abbr: 'KN', link: 'https://knowtify.com', description: 'Knowtify is a early warning system that allows peopple evacuate from danger zones and save lives.' }
  ];

  // Example background config
  const heroBackground = {
    type: "image",
    url: hero,
  };

  return (
    <section className="hero-section" ref={ref} id="home">
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
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-subtitle"
        >
          {startups[0].description}
        </motion.h4>
        
        {/* Corevalue Component  */}
        {/* <div className={`startup-ecosystem ${isAnyHovered ? 'paused' : ''}`}>
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
        </div> */}

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
