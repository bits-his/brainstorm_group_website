import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./portfolio.styles.css";
import ListCard from "../home/CoreValues/component/ListCard";
import logo from "../../assets/logo.png";
import mylikita from "../../assets/logos/mlt.png";
import elite from "../../assets/logos/elite.png";
import inventria from "../../assets/logos/inv.png";
import bitcoops from "../../assets/logos/bit-removebg-preview.png";
import kasuwa from "../../assets/logos/kasuwa-removebg-preview.png";
import knowtify from "../../assets/logos/knowtify copy.png";
import { Link, Element, Events, scroller } from 'react-scroll';

export default function Portfolio({ refi }) {
  const [activeStartup, setActiveStartup] = useState("solutions");
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const scrollIntervalRef = useRef(null);

  const startups = [
    {
      id: "solutions",
      name: "Brainstorm IT Solutions",
      image: logo,
      // description:
      //   "A leading IT solutions provider specializing in custom software development, web applications, and digital transformation services.",
      link: "https://brainstorm.ng",
      list: [
        {
          name: "Web Development",
          description:
            "We build custom websites for businesses and individuals, ensuring they are responsive, secure, and optimized for performance."
        },
        {
          name: "Software Development",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Digital Transformation",
          description:
            "We help businesses modernize their operations and improve their digital capabilities, ensuring they are efficient, secure, and optimized for performance."
        }
      ]
    },
    {
      id: "likita",
      name: "My Likita",
      image: mylikita,
      // description:
      //   "Healthcare management system that connects patients with healthcare providers, enabling easy access to medical services.",
      link: "https://mylikita.com",
      list: [
        {
          name: "Healthcare Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Patient Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Appointment Scheduling",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        }
      ]
    },
    {
      id: "elite",
      name: "Elite School App",
      image: elite,
      // description:
      //   "Comprehensive school management system that streamlines educational processes and enhances communication between schools and parents.",
      link: "https://elscholar.ng",
      list: [
        {
          name: "School Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Student Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Parent Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        }
      ]
    },
    {
      id: "inventria",
      name: "Inventria",
      image: inventria,
      // description:
      //   "Advanced inventory management system for businesses to track and optimize their stock levels efficiently.",
      link: "https://inventria-new.netlify.app",
      list: [
        {
          name: "Inventory Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Reporting",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Sales Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        }
      ]
    },
    {
      id: "bitcoops",
      name: "Bitcoops",
      image: bitcoops,
      // description:
      //   "Digital platform for cooperative societies to manage their operations and member transactions seamlessly.",
      link: "https://www.bitcoops.com",
      list: [
        {
          name: "Cooperative Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Member Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Transaction Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        }
      ]
    },
    {
      id: "kasuwa",
      name: "Kasuwa Mall",
      image: kasuwa,
      // description:
      //   "E-commerce platform connecting local vendors with customers, providing a seamless shopping experience.",
      link: "https://kasuwamall.com",
      list: [
        {
          name: "E-commerce",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Vendor Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Customer Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        }
      ]
    },
    {
      id: "knowtify",
      name: "Knowtify",
      image: knowtify,
      // description:
      //   "Educational technology platform providing interactive learning experiences and knowledge sharing.",
      link: "https://www.knowtify.com.ng",
      list: [
        {
          name: "Disaster Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Early Warning System",
          description:
            "Early warning system for disasters and emergencies, ensuring they are efficient, secure, and optimized for performance."
        },
        {
          name: "Location Based Services",
          description:
            "Location based services for disasters and emergencies, ensuring they are efficient, secure, and optimized for performance."
        }
      ]
    }
  ];

  useEffect(() => {
    // Initialize scrollspy
    Events.scrollEvent.register('begin', () => {
      document.getElementById('portfolio-content').style.scrollBehavior = 'smooth';
    });

    Events.scrollEvent.register('end', () => {
      setTimeout(() => {
        document.getElementById('portfolio-content').style.scrollBehavior = 'auto';
      }, 5000);
    });

    // Auto-scroll functionality
    const startAutoScroll = () => {
      let currentIndex = 0;
      scrollIntervalRef.current = setInterval(() => {
        if (autoScrollEnabled) {
          currentIndex = (currentIndex + 1) % startups.length;
          if (currentIndex === 0) {
            // When reaching the end, go back to "solutions"
            handleScroll("solutions");
            setActiveStartup("solutions");
          } else {
            handleScroll(startups[currentIndex].id);
            setActiveStartup(startups[currentIndex].id);
          }
        }
      }, 7000); // Wait 7 seconds before scrolling to next section
    };

    if (autoScrollEnabled) {
      startAutoScroll();
    }

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [autoScrollEnabled]);

  const handleSetActive = (to) => {
    setActiveStartup(to);
    setAutoScrollEnabled(false); // Stop auto-scroll when manually clicking
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  const handleScroll = (to) => {
    scroller.scrollTo(to, {
      containerId: 'portfolio-content',
      duration: 5000,
      delay: 0,
      smooth: true,
      offset: -100
    });
  };

  return (
    <div ref={refi} id="portfolio" className="portfolio-wrapper">
      <div className="portfolio-container">
        <div className="portfolio-row">
          {/* Sidebar Menu */}
          <div className="col-md-3">
            <div className="portfolio-sidebar">
              <h3>Our Companies</h3>
              <ul className="startup-menu">
                {startups.map((startup) => (
                  <li
                    key={startup.id}
                    className={activeStartup === startup.id ? "active" : ""}
                  >
                    <Link
                      activeClass="active"
                      to={startup.id}
                      spy={true}
                      smooth={true}
                      duration={5000}
                      containerId="portfolio-content"
                      offset={-100}
                      onSetActive={() => handleSetActive(startup.id)}
                      onClick={() => {
                        handleSetActive(startup.id);
                        handleScroll(startup.id);
                      }}
                    >
                      {startup.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div 
              className="portfolio-content" 
              id="portfolio-content"
              onMouseEnter={() => setAutoScrollEnabled(false)}
              onMouseLeave={() => setAutoScrollEnabled(true)}
            >
              {startups.map((startup) => (
                <Element
                  name={startup.id}
                  key={startup.id}
                  className={`startup-section ${activeStartup === startup.id ? 'active' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="startup-content-wrapper"
                  >
                    <div className="startup-info">
                      <img
                        src={startup.image}
                        alt={startup.name}
                        width={100}
                        height={100}
                      />
                      {startup.list.map((item, index) => (
                        <div key={index}>
                          <ListCard
                            name={item.name}
                            description={item.description}
                          />
                        </div>
                      ))}
                      <a
                        href={startup.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-button"
                      >
                        Visit Website
                      </a>
                    </div>
                    <div className="startup-image-wrapper">
                      <img src={startup.image} alt={startup.name} />
                    </div>
                  </motion.div>
                </Element>
              ))}
            </div>
          </div>
        </div>

        {/* {window.innerWidth <= 768 && activeStartup && (
          <div className="mobile-section-indicator">
            {startups.find(s => s.id === activeStartup)?.name}
          </div>
        )} */}
      </div>
    </div>
  );
}
