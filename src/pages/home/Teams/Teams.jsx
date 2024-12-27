import React from "react";
import "./teams.css";
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { motion } from "framer-motion";
import murtala from "../../../assets/team/murtala123.png";
import dangana from "../../../assets/team/mr-dangana.png";
import mary from "../../../assets/team/mrs_mary.png";
import isah from "../../../assets/team/isah1.png";
import fahad from "../../../assets/team/fahad1.png";
import ishaq from "../../../assets/team/ishaq1.png";
import mustapha from "../../../assets/team/musty1.png";

const teamMembers = [
  {
    id: 1,
    name: "Idris Abdulkadir Dangana",
    role: "GROUP CEO",
    description:
      "As the Group CEO, I lead our diverse portfolio of companies with a vision to transform various sectors through innovative technology solutions. My focus is on strategic growth, fostering innovation, and building sustainable businesses that create value for all stakeholders.",
    image: dangana,
    featured: true,
  },
  {
    id: 2,
    name: "Nazif Abdulahi",
    role: "Group Head Legal Services",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 3,
    name: "Sadiq Khalifa",
    role: "Group Head Operations",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 4,
    name: "Ismaila Kabir",
    role: "Group Head Business Development",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 5,
    name: "Munzali Muktar (ACIBF)",
    role: "Group Financial Controller",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 6,
    name: "Mustapha Issa Toyin",
    role: " CEO Mylikita",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: mustapha,
  },
  {
    id: 7,
    name: "Fahad Ado Muhammad",
    role: " CEO Inventria",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: fahad,
  },
  {
    id: 8,
    name: "Isah Muhammad Rabiu",
    role: " CEO Knowtify",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: isah,
  },
  {
    id: 9,
    name: "Muritala Adewale Akinyemi",
    role: " CEO Bitcoops",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: murtala,
  },
  {
    id: 10,
    name: "Mary Dania",
    role: " CEO Kasuwa Mall",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: mary,
  },
  {
    id: 11,
    name: "Ishaq Ibrahim",
    role: " CEO Elite Academic Tech",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ishaq,
  },
];

export default function Teams({ Ref }) {
  return (
    <div>
      <div className="team-container" ref={Ref} id="teams">
        <div className="row">
          <div className="services-header">
            <h2 className="services-title">
              Our <span>Team</span>
            </h2>
          </div>
          <div className="team-left col-lg-4 col-md-12">
            <h2>Our Leadership</h2>
            <p>
              Meet the visionaries and experts who drive our success through
              innovation, leadership, and commitment to excellence.
            </p>
          </div>
          <div className="team-right col-lg-8 col-md-12">
            {teamMembers.map((member) => (
              <motion.div
                className={`team-member ${
                  member.featured ? "featured-member" : ""
                }`}
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="member-image">
                  {member.image != "" ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="member-initials">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.description}</p>
                  <div className="social-icons">
                    <a
                      href="#"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <FaLinkedin />
                    </a>
                    <a href="#" aria-label={`Email ${member.name}`}>
                      <FaMailBulk />
                    </a>
                    <a
                      href="#"
                      aria-label={`Instagram profile of ${member.name}`}
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
