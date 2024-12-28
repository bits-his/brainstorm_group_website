import { useState, useEffect } from "react";
import "./navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { FaLightbulb, FaReact } from "react-icons/fa";
// import {FaSearch } from 'react-icons/fa';

export default function Navbar({ sectionRefs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.keys(sectionRefs).forEach((key) => {
      if (sectionRefs[key].current) {
        // console.log(`Observing section: ${key}`);
        observer.observe(sectionRefs[key].current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection, sectionRefs]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(activeSection);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(activeSection);
  return (
    <>
      {/* {JSON.stringify(activeSection)} */}
      <header className={`${isSticky ? "isSticky" : ""}`}>
        <div className="header">
          <div
            className="logo-container"
            onClick={
              location.pathname === "/" ? null : () => navigate("/#home")
            }
          >
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              <div className="text-logo">
                <FaLightbulb className="brainstorm-icon" />
                <div className="text-content">
                  Brainstorm
                  <span>Group</span>
                </div>
              </div>
              {/* <img src={Logo} alt="Brainstorm" fetchpriority="high" /> */}
            </a>
          </div>
          <div className={`head-main ${isMenuOpen ? "open" : ""}`}>
            <div className="inner">
              <ul className={`navlist`} onClick={handleLinkClick}>
                {/* <li
                  onClick={
                    location.pathname === "/" ? null : () => navigate("/#home")
                  }
                >
                  <a
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                  >
                    Home
                  </a>
                </li> */}
                <li onClick={() => console.log("clicked")}>
                  <a
                    href="#aboutus"
                    className={activeSection === "aboutus" ? "active" : ""}
                  >
                    About
                  </a>
                </li>
                <li
                // onClick={
                //   location.pathname === "/blog#service"
                //     ? null
                //     : () => navigate("/#service")
                // }
                >
                  <a
                    href="#services"
                    className={activeSection === "services" ? "active" : ""}
                  >
                    Services
                  </a>
                </li>
                <li
                  // onClick={
                  //   location.pathname === "/blog#portfolio"
                  //     ? null
                  //     : () => navigate("/#portfolio")
                  // }
                >
                  <a
                    href="#portfolio"
                    className={activeSection === "portfolio" ? "active" : ""}
                  >
                    Portfolio
                  </a>
                </li>
                <li
                  // onClick={
                  //   location.pathname === "/blog#teams"
                  //     ? null
                  //     : () => navigate("/#teams")
                  // }
                >
                  <a
                    href="#teams"
                    className={activeSection === "teams" ? "active" : ""}
                  >
                    Teams
                  </a>
                </li>
                {/* <li
                  onClick={
                    location.pathname === "/blog#contact"
                      ? null
                      : () => navigate("/#contact")
                  }
                >
                  <a
                    href="#contact"
                    className={activeSection === "contact" ? "active" : ""}
                  >
                    Contact
                  </a>
                </li> */}

                {/* <li>
            <a href="#blog" className={activeSection === 'blog' ? 'active' : ''}>
              Blog
            </a>
          </li> */}
              </ul>
            </div>
            {/* <div className="last" onClick={handleMenuClick}>
              <ul>
                <li className="contact" onClick={() => setActiveSection("")}>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="header-icons">
            <button id="menu-icon" onClick={handleMenuClick}>
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

Navbar.propTypes = {
  sectionRefs: PropTypes.objectOf(PropTypes.object).isRequired,
};
