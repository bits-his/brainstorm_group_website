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

export default function Portfolio({ refi }) {
  const [activeStartup, setActiveStartup] = useState("solutions");
  const startupRefs = useRef({});

  const startups = [
    {
      id: "solutions",
      name: "Brainstorm IT Solutions",
      image: logo,
      description:
        "A leading IT solutions provider specializing in custom software development, web applications, and digital transformation services.",
      link: "https://brainstorm.ng",
      list: [
        {
          name: "Web Development",
          description:
            "We build custom websites for businesses and individuals, ensuring they are responsive, secure, and optimized for performance.",
        },
        {
          name: "Software Development",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Digital Transformation",
          description:
            "We help businesses modernize their operations and improve their digital capabilities, ensuring they are efficient, secure, and optimized for performance.",
        },
      ],
    },
    {
      id: "likita",
      name: "My Likita",
      image: mylikita,
      description:
        "Healthcare management system that connects patients with healthcare providers, enabling easy access to medical services.",
      link: "https://mylikita.com",
      list: [
        {
          name: "Healthcare Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Patient Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Appointment Scheduling",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
      ],
    },
    {
      id: "elite",
      name: "Elite School App",
      image: elite,
      description:
        "Comprehensive school management system that streamlines educational processes and enhances communication between schools and parents.",
      link: "https://elscholar.ng",
      list: [
        {
          name: "School Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Student Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Parent Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
      ],
    },
    {
      id: "inventria",
      name: "Inventria",
      image: inventria,
      description:
        "Advanced inventory management system for businesses to track and optimize their stock levels efficiently.",
      link: "https://inventria-new.netlify.app",
      list: [
        {
          name: "Inventory Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Reporting",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Sales Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
      ],
    },
    {
      id: "bitcoops",
      name: "Bitcoops",
      image: bitcoops,
      description:
        "Digital platform for cooperative societies to manage their operations and member transactions seamlessly.",
      link: "https://www.bitcoops.com",
      list: [
        {
          name: "Cooperative Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Member Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Transaction Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
      ],
    },
    {
      id: "kasuwa",
      name: "Kasuwa Mall",
      image: kasuwa,
      description:
        "E-commerce platform connecting local vendors with customers, providing a seamless shopping experience.",
      link: "https://kasuwamall.com",
      list: [
        {
          name: "E-commerce",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Vendor Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Customer Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
      ],
    },
    {
      id: "knowtify",
      name: "Knowtify",
      image: knowtify,
      description:
        "Educational technology platform providing interactive learning experiences and knowledge sharing.",
      link: "https://www.knowtify.com.ng",
      list: [
        {
          name: "Disaster Management",
          description:
            "We develop custom software applications for businesses and individuals, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Early Warning System",
          description:
            "Early warning system for disasters and emergencies, ensuring they are efficient, secure, and optimized for performance.",
        },
        {
          name: "Location Based Services",
          description:
            "Location based services for disasters and emergencies, ensuring they are efficient, secure, and optimized for performance.",
        },
      ],
    },
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
    <div ref={refi} id="portfolio">
      <div className="portfolio-container" >
        <div className="row">
          <div className="services-header">
            <h2 className="services-title">
              Our <span>Portfolio</span>
            </h2>
          </div>
          {/* Sidebar Menu - 3 columns */}
          <div className="col-md-3">
            <div className="portfolio-sidebar">
              <h3>Our Startups</h3>
              <ul className="startup-menu">
                {startups.map((startup) => (
                  <li
                    key={startup.id}
                    className={activeStartup === startup.id ? "active" : ""}
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
                  {/* <h2>{startup.name}</h2> */}
                  <img
                    src={startup.image}
                    alt={startup.name}
                    width={150}
                    height={100}
                  />
                  <p>{startup.description}</p>

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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
