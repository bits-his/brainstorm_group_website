import React from 'react';

export default function AboutUs({ Ref }){
  return (
    <div className="container my-5" ref={Ref} id="about"> 
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="mb-4">About Us</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.
          </p>
          <div className="d-flex">
            <div className="me-4 text-center">
              <img src="https://via.placeholder.com/50" alt="Web & Mobile Specialties" className="mb-2" />
              <h5 className="mb-2">Web & Mobile Specialties</h5>
              <p className="small mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
              <a href="#" className="text-primary">Learn More</a>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/50" alt="Intuitive Thinkers" className="mb-2" />
              <h5 className="mb-2">Intuitive Thinkers</h5>
              <p className="small mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
              <a href="#" className="text-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://via.placeholder.com/500x400" alt="Office Desk" className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  );
};
