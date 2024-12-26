import React from "react";
import "./teams.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "Phisherman",
    role: "Creative Leader",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 2,
    name: "Nazif Abdulahi",
    role: "Sales Manager",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 3,
    name: "Sadiq Khalifa",
    role: "Sales Manager",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 4,
    name: "Ismaila Kabir",
    role: "Sales Manager",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 5,
    name: "Bashiru Jibrina",
    role: "Delivery man",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
  {
    id: 6,
    name: "John Doe",
    role: "Sales Manager",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: "",
  },
];

export default function Teams({ Ref }) {
  return (
    <div className="team-container" ref={Ref} id="teams">
      <div className="row">
        <div className="team-left col-md-4">
          <h2>Our Team</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="team-right col-md-8">
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
  );
}
