import React from "react";
import img from "../../../assets/DSC_0701.jpg";
import { FaMobile, FaPuzzlePiece } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutUs({ Ref }) {
  return (
    <>
      <div className="container my-5" ref={Ref} id="about">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6 mb-4 mb-md-0">
            <h1 className="mb-4">About Us</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              incidunt magnam corrupti, odit eos harum quaerat nostrum
              voluptatibus aspernatur eligendi accusantium cum, impedit
              blanditiis voluptate commodi doloribus, nemo dignissimos
              recusandae.
            </p>
            <div className="row mb-md-4">
              <div className="col-md-6">
                <FaMobile
                  size={40}
                  fontWeight="bold"
                  color="gray"
                  className="mb-2"
                />
                <h5 className="mb-2">Web Specialties</h5>
                <p className="small mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis consect.
                </p>
                <Link to="#" className="text-primary text-decoration-none">
                  Learn More
                </Link>
              </div>
              <div className="col-md-6">
                <FaPuzzlePiece
                  size={40}
                  fontWeight="bold"
                  color="gray"
                  className="mb-2"
                />
                <h5 className="mb-2">Intuitive Thinkers</h5>
                <p className="small mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis.
                </p>
                <Link to="#" className="text-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 text-center">
            <img
              src={img}
              alt="Office Desk"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      <div className="container my-5 my-md-4">
        <div className="row text-left">
          <div className="col-md-4 position-relative mb-4">
          <div className="dots-pattern"></div>
            <h3 className="text-primary mb-3">Innovate</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              praesentium eos nulla qui commodi consectetur beatae fugiat.
              Veniam iste rerum perferendis.
            </p>
            <ul className="list-unstyled text-start">
              <li>
                <i className="text-success me-2">✔</i>Customer Experience
              </li>
              <li>
                <i className="text-success me-2">✔</i>Product Management
              </li>
              <li>
                <i className="text-success me-2">✔</i>Proof of Concept
              </li>
            </ul>
          </div>
          <div className="col-md-4 position-relative mb-4">
          <div className="dots-pattern"></div>
            <h3 className="text-primary mb-3">Create</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              praesentium eos nulla qui commodi consectetur beatae fugiat.
              Veniam iste rerum perferendis.
            </p>
            <ul className="list-unstyled text-start">
              <li>
                <i className="text-success me-2">✔</i>Web Design
              </li>
              <li>
                <i className="text-success me-2">✔</i>Branding
              </li>
              <li>
                <i className="text-success me-2">✔</i>Web & App Development
              </li>
            </ul>
          </div>
          <div className="col-md-4 position-relative mb-4">
          <div className="dots-pattern"></div>
            <h3 className="text-primary mb-3">Scale</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              praesentium eos nulla qui commodi consectetur beatae fugiat.
              Veniam iste rerum perferendis.
            </p>
            <ul className="list-unstyled text-start">
              <li>
                <i className="text-success me-2">✔</i>Social Media
              </li>
              <li>
                <i className="text-success me-2">✔</i>Paid Campaigns
              </li>
              <li>
                <i className="text-success me-2">✔</i>Marketing & SEO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
