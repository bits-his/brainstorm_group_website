import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
// import Magnet from './Magnet';
import logo from "../../../assets/logo.png";
import mylikita from "../../../assets/logos/mlt.png";
import elite from "../../../assets/logos/elite.png";
import inventria from "../../../assets/logos/inv.png";
import bitcoops from "../../../assets/logos/bit-removebg-preview.png";
import kasuwa from "../../../assets/logos/kasuwa-removebg-preview.png";
import knowtify from "../../../assets/logos/knowtify copy.png";
import hero from "../../../assets/DSC_0701.jpg";
import "../../../pages/home/home.styles.css";
import PropTypes from "prop-types";
// import { FaLightbulb } from "react-icons/fa";

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
          filter: "brightness(0.6)",
          transition: "all 0.3s ease-in-out",
        //   background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
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
        <div className="hero-text-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
           Welcome to Brainstorm Group
            {/* <div className="text-logo align-center justify-center flex items-center">
                <FaLightbulb className="brainstorm-icon" />
                <div className="text-content">
                  Brainstorm
                  <span>Group</span>
                </div>
              </div> */}
          </motion.h1>

          <TypeAnimation
            sequence={[
              'Group of companies',
              1000,
              'Transforming businesses',
              1000,
              'Innovating solutions',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="typing-text"
            repeat={Infinity}
          />

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-description"
          >
            We are a group of companies dedicated to delivering cutting-edge solutions
            across multiple industries. Our mission is to transform ideas into reality
            through technology and innovation.
          </motion.p>
        </div>

        <motion.div
          className="bottom-logo-strip"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {startups.filter(s => s.id !== 'parent').map((startup) => (
            <motion.div 
              key={startup.id} 
              className="bottom-logo"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={startup.logo} alt={startup.name} title={startup.name} />
              <span className="bottom-logo-name" title={startup.name}></span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
