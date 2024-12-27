import React from "react";
import "./teams.css";
import {
  // FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
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
    image: "",
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
    name: "Munzali Muktar",
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
    image: "",
  },
  {
    id: 7,
    name: "Fahad Ado Muhammad",
    role: " CEO Inventria",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 8,
    name: "Isah Muhammad Rabiu",
    role: " CEO Knowtify",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 9,
    name: "Muritala Adewale Akinyemi",
    role: " CEO Bitcoops",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 10,
    name: "Mary Dania",
    role: " CEO Kasuwa Mall",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 11,
    name: "Ishaq Ibrahim",
    role: " CEO Elite Academic Tech",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
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
            <h2>Our Team</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="team-right col-lg-8 col-md-12 d-flex">
            {teamMembers.map((member) => (
              <motion.div className="team-member col-md-6 col-sm-12" key={member.id}>
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
