import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import map from "../../assets/map.webp";
import call from "../../assets/call.webp";
// import message from "../../assets/logos/message.webp";
import "./footer.css";
import { IoLocationSharp, IoLogoFacebook } from "react-icons/io5";
import { FaLightbulb, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

export default function Footer() {
  const date = new Date().getFullYear();
  // const footerStyle = {
  //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%' height='100%' id='svg' viewBox='0 0 1440 690' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0,700 L 0,337 C 296.5,327.75 593,318.5 833,306 C 1073,293.5 1256.5,277.75 1440,262 L 1440,700 L 0,700 Z' stroke='none' stroke-width='0' fill='%23ebebeb' fill-opacity='1'%3E%3C/path%3E%3C/svg%3E")`,
  //   backgroundSize: "cover", // Ensure the SVG covers the entire footer area
  //   height: "70vh", // Set the height to 70vh
  //   color: "#000", // Set text color
  //   display: "flex", // Set display to flex
  //   alignItems: "center", // Center content vertically
  //   justifyContent: "center",
  // };
  return (
    <>
      <footer>
        <div className="container">
          <div className="main-footer">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <Link to="/" className="mb-4">
                    <div className="text-logo">
                      <FaLightbulb className="brainstorm-icon" />
                      <div className="text-content">
                        Brainstorm
                        <span>Group</span>
                      </div>
                    </div>
                    {/* <img src={Logo} alt="Logo" className="logo mb-4" /> */}
                  </Link>

                  <p>
                    Discover the power of customized software at brainstorm.
                  </p>

                  <ul className="footer-social">
                    <li>
                      <Link to="#">
                        <IoLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:hello@brainstormgroup.ng">
                        <FaMailBulk />
                      </a>
                    </li>
                  </ul>
                  <div className="tel d-flex">
                    <img src={call} alt="call" />
                    <a href="tel: +234 903 281 8956" className="mb-">
                      +234 903 281 8956
                    </a>
                  </div>
                  {/* <div className="mail d-flex">
                    <img src={message} alt="message" />
                    <a href="mailto:hello@brainstorm.ng" className="">
                      hello@brainstorm.ng
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <h5 className="mt-3">Fast links</h5>
                  <div
                    className="underline w-25"
                    style={{
                      marginTop: "-20px",
                    }}
                  ></div>

                  <ul>
                    <li className="mb-2">
                      <a href="#about">About us</a>
                    </li>
                    <li className="mb-2">
                      <a href="#services">Services</a>
                    </li>
                    <li className="mb-2">
                      <a href="#portfolio">Portfolio</a>
                    </li>

                    <li className="mb-2">
                      <a href="#teams">Teams</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 ps-sm-5 col-lg-3 col-xl-3">
                <div className="single-footer-widget">
                  <h5 className="mt-3">Our Portfolio</h5>
                  <div
                    className="underline w-25"
                    style={{ marginTop: "-20px" }}
                  ></div>

                  <ul>
                    <li className="mb-2">
                      <a
                        href="https://mylikita.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Mylikita
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.bitcoops.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bitscoops
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://inventria-new.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Inventria
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://kasuwamall.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Kasuwamall
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://elscholar.ng"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Elite Academic Hub
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://www.knowtify.com.ng"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Knowtify
                      </a>
                    </li>
                    {/* <li className="mb-2">
                      <b>
                        <Link to="#ihub">Click to see more</Link>
                      </b>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-4 ps-sm-1 col-lg-3 col-xl-3">
                <div className="footer-contact">
                  <h5 className="mt-3">Adresses </h5>
                  <div
                    className="underline w-25"
                    style={{ marginTop: "-20px" }}
                  ></div>

                  {/* <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      Floor 1, African Alliance Building, No 1 Sani Abacha Way,
                      Kano
                    </p>
                  </div> */}
                  <div id="address">
                    {/* <h4>Office Location</h4> */}
                    <ul>
                      <li>
                        <div>
                          <IoLocationSharp className="footer-icon " />
                          <strong style={{ color: "black", opacity: "0.8" }}>
                            Cooperate HQ :
                          </strong>
                          <br /> Floor 1, African Alliance Building, No 1 Sani
                          Abacha Way, Kano
                        </div>
                      </li>
                      <li>
                        <div>
                          <IoLocationSharp className="footer-icon " />
                          <strong style={{ color: "black", opacity: "0.8" }}>
                            Branch Office:
                          </strong>
                          <br />
                          Behind Olu Wheel Balances Workshop, Gidan Dawa,
                          Katsina State,Nigeria
                        </div>
                      </li>
                      <li>
                        <div>
                          <IoLocationSharp className="footer-icon " />
                          <strong style={{ color: "black", opacity: "0.8" }}>
                            Branch Office:
                          </strong>
                          {/* <br /> */}
                          Flat 42, DROL Estate Wuye Abuja,Nigeria
                        </div>
                      </li>
                      <li>
                        <div>
                          <IoLocationSharp className="footer-icon " />
                          <strong style={{ color: "black", opacity: "0.8" }}>
                            Branch Office:
                          </strong>
                          {/* <br /> */}
                          Flat 42, DROL Estate Wuye Abuja,Nigeria
                        </div>
                      </li>
                      <li>
                        <div>
                          <IoLocationSharp className="footer-icon " />
                          <strong style={{ color: "black", opacity: "0.8" }}>
                            Branch Office:
                          </strong>
                          {/* <br /> */}
                          Flat 42, DROL Estate Wuye Abuja,Nigeria
                        </div>
                      </li>
                      <li>
                        <div>
                          <IoLocationSharp className="footer-icon " />
                          <strong style={{ color: "black", opacity: "0.8" }}>
                            Branch Office:
                          </strong>
                          <br />
                          Flat 42, DROL Estate Wuye Abuja,Nigeria
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>7 Bell Yard London WC2A 2JR United Kingdom</p>
                  </div>
                  <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      16192 Coastal Highway, LewesCounty Essex,
                      DE.19958-9776.USA
                    </p>
                  </div>
                  <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      104/105 Level1, Emaar Square Building 4 Sheikh Muhammad
                      Bin Rashid Boulevard Dubai, United Arab Emirates
                    </p>
                  </div> */}
                  {/* <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>
                      Behind Olu Wheel Balances Workshop, Gidan Dawa, Katsina
                      State,Nigeria
                    </p>
                  </div>
                  <div className="location d-flex">
                    <img src={map} alt="map" />
                    <p>Flat 42, DROL Estate Wuye Abuja,Nigeria</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="copy">
            <p className="ms-2">
              Copyright &copy;{date} All right reserved | Brainstorm Group.
            </p>
          </div>
          <div>
            <ul className="footer-nav">
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
