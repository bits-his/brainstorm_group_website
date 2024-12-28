import { useState } from 'react';
import { motion } from 'framer-motion';
import './contact.styles.css';

export default function Contact({ refi }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <div className="contact-section" ref={refi} id="contact">
      <div className="container py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title mb-4">Get in Touch</h2>
              <p className="mb-4">Have a question or want to work together?</p>
              <div className="contact-info">
                <div className="mb-3">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Your Address
                </div>
                <div className="mb-3">
                  <i className="fas fa-phone me-2"></i>
                  Your Phone
                </div>
                <div className="mb-3">
                  <i className="fas fa-envelope me-2"></i>
                  your@email.com
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-lg-6">
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
