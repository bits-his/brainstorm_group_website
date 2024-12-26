import React from "react";
import "./teams.css";
import {
  // FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMailBulk
  // FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Phisherman",
    role: "GROUP CEO",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 2,
    name: "Nazif Abdulahi",
    role: "GROUP CTO",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 3,
    name: "Sadiq Khalifa",
    role: "Head Cooperative Services",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 4,
    name: "Ismaila Kabir",
    role: "Group Head of Operations",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 5,
    name: "Bashiru Jibrina",
    role: "Group Finance Manager",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 6,
    name: "Mustapha Issa Toyin",
    role: "Partner CEO Mylikita",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 7,
    name: "Ibrahim Abdulahi",
    role: "Partner CEO Inventria",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 8,
    name: "Ibrahim Abdulahi",
    role: "Partner CEO Knowtify",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 9,
    name: "Ibrahim Abdulahi",
    role: "Partner CEO Bitcoops",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  },
  {
    id: 10,
    name: "Ibrahim Abdulahi",
    role: "Partner CEO Kasuwa Mall",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: ""
  }
];

export default function Teams({ Ref }) {
  return (
    <div>
      <div className="services-header">
        <h2 className="services-title">
          Our <span>Team</span>
        </h2>
      </div>
      <div className="team-container" ref={Ref} id="teams">
        <div className="row">
          <div className="team-left col-lg-4 col-md-12">
            <h2>Our Team</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="team-right col-lg-8 col-md-12 mt-md-5">
            {teamMembers.map((member) => (
              <motion.div className="team-member" key={member.id}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.description}</p>
                <div className="social-icons">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaMailBulk />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
