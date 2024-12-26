import { useState } from "react";
import { motion } from "framer-motion";
import Magnet from "../Magnet";
import logo from "../../../assets/logo.png";
import mylikita from "../../../assets/logos/1.jpg";
import elite from "../../../assets/logos/2.jpg";
import inventria from "../../../assets/logos/inv.png";
import bitcoops from "../../../assets/logos/bit-removebg-preview.png";
import kasuwa from "../../../assets/logos/KASUWAMALL__2_-removebg-preview.png";
import knowtify from "../../../assets/logos/knowtify.png";
import "../../../pages/home/home.styles.css";

export default function CoreValue({ Ref }) {
    const [hoveredStartup, setHoveredStartup] = useState(null);
    const [isAnyHovered, setIsAnyHovered] = useState(false);

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
    
  return (
    <>
      <div className="container my-5" ref={Ref} id="corevalues">
        <div className="row align-items-center">
        <div className="col-md-12 col-lg-6 mb-4 mb-md-0">
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
         </div>
          <div className="col-md-12 col-lg-6 mb-4 mb-md-0">
            <h1 className="mb-4">Core Values</h1>
            <p className="mb-4">
            The core values of Brainstorm Group is to provide the best services to our clients and to be the best in the industry.</p>
          </div>
       
        </div>
      </div>

      {/* <div className="container my-5 my-md-4">
        <div className="row text-left">
          <div className="col-md-4 position-relative mb-4">
            <div className="dots-pattern"></div>
            <h3 className="text-primary mb-3">Innovate</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              praesentium eos nulla qui commodi consectetur beatae fugiat.
              Veniam iste rerum perferendis.
            </p>
            <ul className="list-unstyled text-start">
              <li>
                <i className="text-success me-2">✔</i>Customer Experience
              </li>
              <li>
                <i className="text-success me-2">✔</i>Product Management
              </li>
              <li>
                <i className="text-success me-2">✔</i>Proof of Concept
              </li>
            </ul>
          </div>
          <div className="col-md-4 position-relative mb-4">
            <div className="dots-pattern"></div>
            <h3 className="text-primary mb-3">Create</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              praesentium eos nulla qui commodi consectetur beatae fugiat.
              Veniam iste rerum perferendis.
            </p>
            <ul className="list-unstyled text-start">
              <li>
                <i className="text-success me-2">✔</i>Web Design
              </li>
              <li>
                <i className="text-success me-2">✔</i>Branding
              </li>
              <li>
                <i className="text-success me-2">✔</i>Web & App Development
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}
