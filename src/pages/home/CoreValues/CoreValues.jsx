import { useState } from "react";
import { motion } from "framer-motion";
import Magnet from "../Magnet";
import logo from "../../../assets/logo.png";
import brainstormgroup from "../../../assets/logos/brainstorm group.png";
import mylikita from "../../../assets/logos/mlt.png";
import elite from "../../../assets/logos/elite.png";
import inventria from "../../../assets/logos/inv.png";
import bitcoops from "../../../assets/logos/bit-removebg-preview.png";
import kasuwa from "../../../assets/logos/kasuwa-removebg-preview.png";
import knowtify from "../../../assets/logos/knowtify copy.png";
import "../../../pages/home/home.styles.css";

export default function CoreValue({ Ref }) {
  const [hoveredStartup, setHoveredStartup] = useState(null);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const startups = [
    {
      id: "parent",
      name: "Brainstorm Group",
      logo: brainstormgroup,
      abbr: "BG",
      link: "https://brainstormgroup.com",
      description:
        "Brainstorm Group is a group of companies that provide a range of services to businesses and individuals.",
    },
    {
      id: "solutions",
      name: "Brainstorm IT Solutions",
      logo: logo,
      abbr: "BIS",
      link: "https://brainstormitsolutions.com",
      description:
        "Brainstorm IT Solutions is a company that provides IT solutions to businesses and individuals.",
    },
    {
      id: "likita",
      name: "My Likita",
      logo: mylikita,
      abbr: "ML",
      link: "https://mylikita.com",
      description:
        "My Likita is a platform that allows users to manage their daily tasks and schedules.",
    },
    {
      id: "elite",
      name: "Elite School App",
      logo: elite,
      abbr: "ESA",
      link: "https://eliteschoolapp.com",
      description:
        "Elite School App is a platform that allows users to manage their daily tasks and schedules.",
    },
    {
      id: "inventria",
      name: "Inventria",
      logo: inventria,
      abbr: "INV",
      link: "https://inventria.com",
      description:
        "Inventria is a company that provides a range of services to businesses and individuals.",
    },
    {
      id: "bitcoops",
      name: "Bitcoops",
      logo: bitcoops,
      abbr: "BC",
      link: "https://bitcoops.com",
      description:
        "Bitcoops is a company that provides a range of services to businesses and individuals.",
    },
    {
      id: "kasuwa",
      name: "Kasuwa Mall",
      logo: kasuwa,
      abbr: "KM",
      link: "https://kasuwa.com",
      description:
        "Kasuwa Mall is a platform that allows users to manage their daily tasks and schedules.",
    },
    {
      id: "knowtify",
      name: "Knowtify",
      logo: knowtify,
      abbr: "KN",
      link: "https://knowtify.com",
      description:
        "Knowtify is a early warning system that allows peopple evacuate from danger zones and save lives.",
    },
  ];

  return (
    <>
      <div className="my-5" ref={Ref} id="corevalues">
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
            <h1 className="mb-4 core-values-title">Core <span>Values</span></h1>
            <div className="core-values-list">
              <div className="value-row">
                <span className="value-letter core-values-letter">B</span>
                <span className="core-values-text">
                  <span>Being Present</span> - Great opportunity or sudden insight often
                  emerges when you are present
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter">R</span>
                <span className="core-values-text">
                  <span>Resilience</span> - We cultivate the right behaviors and thoughts
                  required to overcome obstacles and achieve our goals
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter">A</span>
                <span className="core-values-text">
                  <span>Accountability</span> - We don't hide mistakes. We don't shift blame.
                  We learn from our mistakes.
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter    ">I</span>
                <span className="core-values-text">
                  <span>Integrity</span> - We are honest, transparent, and ethical in all
                  business engagements
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter    ">N</span>
                <span className="core-values-text">
                  <span>Non-Conformity</span> - We question the status quo and seek
                  alternative ideas
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter">S</span>
                <span className="core-values-text">
                  <span>Service</span> - Quality experience for our customers, local
                  community, and our team
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter">T</span>
                <span className="core-values-text">
                  <span>Teamwork</span> - We drive workforce efficiency by encouraging
                  collaboration, mutual respect, and shared responsibility
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter">O</span>
                <span className="core-values-text">
                  <span>Operational Excellence</span> - We automate and continuously improve
                  our internal processes to promote efficiency.
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter">R</span>
                <span className="core-values-text">
                  <span>Resourcefulness</span> - We thrive by finding innovative solutions to
                  problems using available resources
                </span>
              </div>
              <div className="value-row">
                <span className="value-letter core-values-letter">M</span>
                <span className="core-values-text">
                  <span>Mentorship</span> - Provide technology and Business mentorship to
                  talented youth irrespective of background
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
