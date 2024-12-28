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
import murtala from "../../../assets/team/murtala123.png";
import dangana from "../../../assets/team/mr-dangana.png";
import mary from "../../../assets/team/mrs_mary.png";
import isah from "../../../assets/team/isah1.png";
import fahad from "../../../assets/team/fahad1.png";
import ishaq from "../../../assets/team/ishaq1.png";
import mustapha from "../../../assets/team/musty1.png";

const ceo = [
    {
      id: 1,
      name: "Phisherman",
      role: "GROUP CEO",
      description:
        "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
      image: dangana,
    },
]

const teamMembers = [
  {
    id: 2,
    name: "Nazif Abdulahi",
    role: "Group Head Legal Services",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: isah,
  },
  {
    id: 3,
    name: "Sadiq Khalifa",
    role: "Group Head Operations",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: mary,
  },
  {
    id: 4,
    name: "Ismaila Kabir",
    role: "Group Head Business Development",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: murtala,
  },
  {
    id: 5,
    name: "Munzali Muktar (ACIBF)",
    role: "Group Financial Controller",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: murtala,
  },
  {
    id: 6,
    name: "Mustapha Issa Toyin",
    role: " CEO Mylikita",
    description:
      "Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis. Glavi amet ritnisi libero molestie ante ut fringilla purus eros quis.",
    image: murtala,
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
            <div className="team-left-image">

            <img src={ceo[0].image} alt={ceo[0].name}/>
            </div>
            <h3>{ceo[0].name}</h3>
            <p>{ceo[0].role}</p>
            <p>{ceo[0].description}</p>
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
          </div>
          <div className="team-right col-lg-8 col-md-12 d-flex">
            {teamMembers.map((member) => (
              <motion.div
                className="team-member col-md-4 col-lg-4 col-sm-12 text-left"
                key={member.id}
              >
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
